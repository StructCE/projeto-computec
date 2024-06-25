import Expo, { ExpoPushMessage } from "expo-server-sdk";
import { db } from "../../db";

export const notify = async ({
  title,
  subtitle,
  post_id,
}: {
  title: string;
  subtitle: string;
  post_id: string;
}) => {
  const expo = new Expo();
  const pushTokens = await db.pushToken.findMany();

  let notifications: ExpoPushMessage[] = [];

  pushTokens.forEach((pushToken) => {
    if (!Expo.isExpoPushToken(pushToken.token)) {
      console.error(
        `Push token ${pushToken.token} is not a valid Expo push token`
      );
      return;
    }

    notifications.push({
      to: pushToken.token,
      sound: "default",
      title: title,
      body: subtitle,
      data: {
        post_id: post_id,
      },
    });
  });

  const chunks = expo.chunkPushNotifications(notifications);

  await Promise.all(
    chunks.map(async (chunk) => {
      try {
        await expo.sendPushNotificationsAsync(chunk);
      } catch (error) {
        console.error("Error sending push notifications:", error);
      }
    })
  );
};
