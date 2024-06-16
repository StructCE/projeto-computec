import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./root";
import { createContext } from "./trpc";

export const tRPCRouter = express.Router();

tRPCRouter.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
