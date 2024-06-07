import { OAuth2RequestError, generateState } from "arctic";
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
		const existingUser = await db.user.findFirst({
			where: {
				github_id: githubUser.id
			}
		})

		if (existingUser) {
			const session = await lucia.createSession(existingUser.id, {});
			return res
				.redirect(`exp://${req.hostname}:8081/?session_token=${session.id}`);
		}
		const newUser = await db.user.create({
			data: {
				github_id: githubUser.id,
				username: githubUser.login,
			}
		});
		const session = await lucia.createSession(newUser.id, {});
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
	login: string;
}