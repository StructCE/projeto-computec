import express from "express";
import { db } from "../../db";

export const setPushTokenRoute = express.Router();

setPushTokenRoute.post("/setPushToken", async (req, res) => {
  const { newToken, oldToken } = req.body;

  if (!newToken) {
    return res.status(404).send("There isn't any push token");
  }

  try {
    const existingToken = await db.pushToken.findFirst({
      where: { token: newToken },
    });

    if (existingToken) {
      return res.status(200).send(existingToken);
    }

    const existingOldToken = await db.pushToken.findFirst({
      where: { token: oldToken ?? undefined },
    });

    if (existingOldToken) {
      const updatedToken = await db.pushToken.update({
        where: { id: existingOldToken.id },
        data: { token: newToken },
      });
      return res.status(200).send(updatedToken);
    }

    const createdToken = await db.pushToken.create({
      data: { token: newToken },
    });

    return res.status(200).send(createdToken);
  } catch (error) {
    console.error("Error setting push token:", error);
    return res.status(500).send("Internal server error");
  }
});
