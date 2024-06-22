import { createTRPCRouter } from "../../trpc";
import { getUserSession } from "./procedures";

export const userRouter = createTRPCRouter({
  getUserSession: getUserSession,
});
