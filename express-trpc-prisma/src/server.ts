import express from "express";
import { tRPCRouter } from "./trpc/middleware";
import { authRouter } from "./auth";
import { setPushTokenRoute } from "./utils/notifications/setPushTokenRoute";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(tRPCRouter, authRouter, setPushTokenRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
