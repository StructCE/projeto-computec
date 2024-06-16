import { db } from "../../../db";
import { procedure, createTRPCRouter } from "../../trpc";
import { getEvents } from "./getEvents";

export const eventsRouter = createTRPCRouter({
  getEvents: procedure.query(getEvents),
});
