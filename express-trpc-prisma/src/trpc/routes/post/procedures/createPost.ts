import { db } from "../../../../db";
import z from "zod";
import { protectedProcedure } from "../../../trpc";
import Expo, { ExpoPushMessage } from "expo-server-sdk";

export const notify = async ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const expo = new Expo();
  const pushTokens = await db.pushToken.findMany();

  let notifications: ExpoPushMessage[] = [];
  for (let pushToken of pushTokens) {
    if (!Expo.isExpoPushToken(pushToken.token)) {
      console.error(
        `Push token ${pushToken.token} is not a valid Expo push token`
      );
    }
    console.log(pushToken.token);
    notifications.push({
      to: pushToken.token,
      sound: "default",
      title: title,
      body: subtitle,
    });
  }
  let chunks = expo.chunkPushNotifications(notifications);
  for (let chunk of chunks) {
    try {
      await expo.sendPushNotificationsAsync(chunk);
    } catch (error) {
      console.error(error);
    }
  }
};

export const createPost = protectedProcedure
  .input(
    z.object({
      data: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        local: z.string().optional(),
        dateTime: z.date().optional(),
        images: z.array(z.string()),
      }),
    })
  )
  .mutation(async ({ input }) => {
    const { images, ...data } = input.data;
    const createdPost = await db.post.create({
      data: data,
    });
    images.forEach(async (image) => {
      await db.image.create({
        data: {
          public_id: image,
          post_id: createdPost.id,
        },
      });
    });
    const createdNotification = await db.notification.create({
      data: {
        post_id: createdPost.id,
      },
    });
    await notify(data);
    return { post: createdPost, notification: createdNotification };
  });
