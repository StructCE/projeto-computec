import express from "express";
import { tRPCRouter } from "./trpc/middleware";
import { authRouter } from "./auth";
import { uploadRoute } from "./utils/upload/uploadRoute";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadRoute, tRPCRouter, authRouter);

app.listen(3001);
console.log("Server listening on port 3001");
