import express from "express";
import { lucia } from "./auth.js";
import { loginRouter } from "./routes/login/index.ts";
import { logoutRouter } from "./routes/logout.ts";
import type { User, Session } from "lucia";

export const authRouter = express.Router();

authRouter.use("/auth", async (req, res, next) => {
  const sessionId =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!sessionId) {
    res.locals.user = null;
    res.locals.session = null;
    return next();
  }

  const { session, user } = await lucia.validateSession(sessionId);
  res.locals.session = session;
  res.locals.user = user;
  return next();
});

authRouter.use(loginRouter, logoutRouter);

declare global {
  namespace Express {
    interface Locals {
      user: User | null;
      session: Session | null;
    }
  }
}
