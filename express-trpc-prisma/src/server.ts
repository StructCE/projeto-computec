import express from "express";
import { tRPCRouter } from "./trpc/middleware";
import { authRouter } from "./auth";
import { setPushTokenRoute } from "./utils/notifications/setPushTokenRoute";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(tRPCRouter, authRouter, setPushTokenRoute);

app.listen(3000, () => {
  console.log(`Server is running on ${process.env.API_URL}`);
});
