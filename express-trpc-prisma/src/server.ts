import express from 'express';
import { tRPCRouter } from './trpc/trpc';
import { authRouter } from './auth';


export const app = express();

app.use(tRPCRouter, authRouter)

app.listen(3001);

console.log("Server listening on port 3001")