import express from "express";
import { db } from "../db";

export const setPushTokenRoute = express.Router();

setPushTokenRoute.post("/setPushToken", async (req, res) => {
  if (!req.body.newToken) return res.status(404).send("Não há token de push");
  const existingToken = await db.pushToken.findFirst({
    where: {
      token: req.body.newToken,
    },
  });
  if (existingToken) return res.status(200).send(existingToken);

  const existingOldToken = await db.pushToken.findFirst({
    where: {
      token: req.body.oldToken ?? undefined,
    },
  });

  if (existingOldToken) {
    const updatedToken = await db.pushToken.update({
      where: {
        id: existingOldToken.id,
      },
      data: {
        token: req.body.newToken,
      },
    });
    return res.status(200).send(updatedToken);
  }
  const createdToken = await db.pushToken.create({
    data: {
      token: req.body.newToken,
    },
  });
  return res.status(200).send(createdToken);
});
