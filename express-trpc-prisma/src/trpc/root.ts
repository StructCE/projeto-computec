import { createTRPCRouter } from "./trpc";
import { eventsRouter } from "./routes/event/event";
import { userRouter } from "./routes/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
  events: eventsRouter,
});

export type AppRouter = typeof appRouter;
