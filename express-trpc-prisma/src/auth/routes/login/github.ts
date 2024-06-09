import { GitHub, OAuth2RequestError, generateState } from "arctic";
import express from "express";
import { github, lucia } from "../../auth";
import { parseCookies, serializeCookie } from "oslo/cookie";
import { db } from "../../../db";

export const githubLoginRouter = express.Router();

githubLoginRouter.get("/auth/login/github", async (_, res) => {
	const state = generateState();
	const url = await github.createAuthorizationURL(state);
	res
		.appendHeader(
			"Set-Cookie",
			serializeCookie("github_oauth_state", state, {
				path: "/",
				secure: process.env.NODE_ENV === "production",
				httpOnly: true,
				maxAge: 60 * 10,
				sameSite: "lax"
			})
		)
		.redirect(url.toString());
});

githubLoginRouter.get("/auth/login/github/callback", async (req, res) => {
	const code = req.query.code?.toString() ?? null;
	const state = req.query.state?.toString() ?? null;
	const storedState = parseCookies(req.headers.cookie ?? "").get("github_oauth_state") ?? null;
	if (!code || !state || !storedState || state !== storedState) {
		console.log(code, state, storedState);
		res.status(400).end();
		return;
	}
	try {
		const tokens = await github.validateAuthorizationCode(code);
		const githubUserResponse = await fetch("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const githubUser: GitHubUser = await githubUserResponse.json();
		const existingAccount = await db.account.findFirst({
			where: {
				provider_user_id: githubUser.id
			}
		})
		if (existingAccount) {
			const session = await lucia.createSession(existingAccount.user_id, {});
			return res
				.redirect(`exp://${req.hostname}:8081/?session_token=${session.id}`);
		}
		const existingUser = await db.user.findFirst({
			where: {
				email: githubUser.email
			}
		})
		if (existingUser) {
			const account = await db.account.create({
				data: {
					provider_id: "github",
					provider_user_id: githubUser.id,
					user_id: existingUser.id,
				}
			})
			const session = await lucia.createSession(account.user_id, {});
			return res
				.redirect(`exp://${req.hostname}:8081/?session_token=${session.id}`);
		}
		const newUser = await db.user.create({
			data: {
				name: githubUser.name,
				email: githubUser.email
			}
		});
		const newAccount = await db.account.create({
			data: {
				provider_id: "github",
				provider_user_id: githubUser.id,
				user_id: newUser.id
			}
		})
		const session = await lucia.createSession(newAccount.user_id, {});
		return res
			.redirect(`exp://${req.hostname}:8081/?session_token=${session.id}`);
	} catch (e) {
		if (e instanceof OAuth2RequestError && e.message === "bad_verification_code") {
			// invalid code
			res.status(400).end();
			return;
		}
		res.status(500).end();
		return;
	}
});

interface GitHubUser {
	id: number;
	name: string;
	email: string;
}