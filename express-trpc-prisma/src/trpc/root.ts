import { createTRPCRouter } from "./trpc";
import { eventsRouter } from "./routes/event/event";
import { userRouter } from "./routes/user/user";
import { notificationRouter } from "./routes/notification/notification";
import { postRouter } from "./routes/post/post";

export const appRouter = createTRPCRouter({
  user: userRouter,
  event: eventsRouter,
  notification: notificationRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
