import express from "express";
import { lucia } from "../auth";

export const logoutRouter = express.Router();

logoutRouter.post("/", async (_, res) => {
	if (!res.locals.session) {
		return res.status(401).end();
	}
	await lucia.invalidateSession(res.locals.session.id);
	return res.redirect("/login");
});