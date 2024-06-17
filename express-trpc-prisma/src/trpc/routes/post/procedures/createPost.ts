import { db } from "../../../../db";
import z from "zod";
import { protectedProcedure } from "../../../trpc";

export const createPost = protectedProcedure
  .input(
    z.object({
      data: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        local: z.string(),
        dateTime: z.date(),
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
    return createdPost;
  });
