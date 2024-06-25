import z from "zod";
import { protectedProcedure } from "../../../trpc";
import { db } from "../../../../db";
import { notify } from "../../../../utils/notifications/notify";

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

    await Promise.all(
      images.map((image) =>
        db.image.create({
          data: {
            public_id: image,
            post_id: createdPost.id,
          },
        })
      )
    );

    const createdNotification = await db.notification.create({
      data: {
        post_id: createdPost.id,
      },
    });

    await notify({
      title: createdPost.title,
      subtitle: createdPost.subtitle,
      post_id: createdPost.id,
    });

    return { post: createdPost, notification: createdNotification };
  });
