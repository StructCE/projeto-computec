import express from "express";
import { githubLoginRouter } from "./github.js";
import { googleLoginRouter } from "./google.js";

export const loginRouter = express.Router();

loginRouter.use(githubLoginRouter, googleLoginRouter);

loginRouter.get("/auth/login", async (req, res) => {
  if (res.locals.session) {
    return res.redirect(
      `exp://192.168.100.16:8081/?session_token=${res.locals.session.id}`
    );
  }
  return res.status(200);
});
