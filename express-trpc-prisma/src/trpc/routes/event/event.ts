import { createTRPCRouter } from "../../trpc";
import { getEvents } from "./procedures";

export const eventsRouter = createTRPCRouter({
  getEvents: getEvents,
});
