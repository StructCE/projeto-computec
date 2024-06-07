import express from "express";
import { githubLoginRouter } from "./github.js";

export const loginRouter = express.Router();

loginRouter.use(githubLoginRouter);

loginRouter.get("/auth/login", async (req, res) => {
	if (res.locals.session) {
		return res.redirect(`exp://${req.hostname}:8081/?session_token=${res.locals.session.id}`);
	}
	return res.status(200);
});
