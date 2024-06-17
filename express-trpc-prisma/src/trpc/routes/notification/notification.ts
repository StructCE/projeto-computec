import { createTRPCRouter } from "../../trpc";
import { getNotifications } from "./procedures";

export const notificationRouter = createTRPCRouter({
  getNotifications: getNotifications,
});
