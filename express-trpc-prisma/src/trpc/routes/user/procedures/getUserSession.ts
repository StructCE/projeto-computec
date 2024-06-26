import { procedure } from "../../../trpc";
import { lucia } from "../../../../auth/auth";
import z from "zod";

export const getUserSession = procedure
  .input(z.object({ sessionId: z.string() }))
  .query(async ({ input }) => {
    const session = await lucia.validateSession(input.sessionId);
    return session;
  });
