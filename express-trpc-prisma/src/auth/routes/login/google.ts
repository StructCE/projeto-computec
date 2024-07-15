import {
  OAuth2RequestError,
  generateState,
  generateCodeVerifier,
} from "arctic";
import express from "express";
import { google, lucia } from "../../auth";
import { parseCookies, serializeCookie } from "oslo/cookie";
import { db } from "../../../db";

export const googleLoginRouter = express.Router();

googleLoginRouter.get("/auth/login/google", async (_, res) => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });
  res
    .appendHeader(
      "Set-Cookie",
      serializeCookie("google_oauth_state", state, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10,
      })
    )
    .appendHeader(
      "Set-Cookie",
      serializeCookie("code_verifier", codeVerifier, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10,
      })
    )
    .redirect(url.toString());
});

googleLoginRouter.get("/auth/login/google/callback", async (req, res) => {
  const code = req.query.code?.toString() ?? null;
  const state = req.query.state?.toString() ?? null;
  const storedState =
    parseCookies(req.headers.cookie ?? "").get("google_oauth_state") ?? null;
  const storedCodeVerifier =
    parseCookies(req.headers.cookie ?? "").get("code_verifier") ?? null;
  if (
    !code ||
    !state ||
    !storedState ||
    !storedCodeVerifier ||
    state !== storedState
  ) {
    console.log(code, state, storedState);
    res.status(400).end();
    return;
  }
  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );
    const googleUserResponse = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );
    const googleUser: googleUser = await googleUserResponse.json();
    const existingAccount = await db.account.findFirst({
      where: {
        provider_user_id: googleUser.id,
      },
    });
    if (existingAccount) {
      const session = await lucia.createSession(existingAccount.user_id, {});
      return res.redirect(
        `exp://192.168.100.16:8081/?session_token=${session.id}`
      );
    }
    const existingUser = await db.user.findFirst({
      where: {
        email: googleUser.email,
      },
    });
    if (existingUser) {
      const account = await db.account.create({
        data: {
          provider_id: "google",
          provider_user_id: googleUser.id,
          user_id: existingUser.id,
        },
      });
      const session = await lucia.createSession(account.user_id, {});
      return res.redirect(
        `exp://192.168.100.16:8081/?session_token=${session.id}`
      );
    }
    const newUser = await db.user.create({
      data: {
        name: googleUser.name,
        email: googleUser.email,
      },
    });
    const newAccount = await db.account.create({
      data: {
        provider_id: "google",
        provider_user_id: googleUser.id,
        user_id: newUser.id,
      },
    });
    const session = await lucia.createSession(newAccount.user_id, {});
    return res.redirect(
      `exp://192.168.100.16:8081/?session_token=${session.id}`
    );
  } catch (e) {
    if (
      e instanceof OAuth2RequestError &&
      e.message === "bad_verification_code"
    ) {
      // invalid code
      res.status(400).end();
      return;
    }
    res.status(500).end();
    return;
  }
});

interface googleUser {
  id: number;
  name: string;
  email: string;
}
