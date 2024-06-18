import * as trpcExpress from "@trpc/server/adapters/express";
import { initTRPC, TRPCError } from "@trpc/server";
import { db } from "../db";
import { lucia } from "../auth/auth";
import superjson from "superjson";

// created for each request
export const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  if (req.headers.authorization) {
    const session = await lucia.validateSession(req.headers.authorization);
    return {
      db,
      session,
      ...req.headers,
    };
  }
  return {
    db,
    session: {
      user: null,
      session: null,
    },
    ...req.headers,
  };
};
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      error,
    },
  }),
});

export const createTRPCRouter = t.router;
export const procedure = t.procedure;
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
