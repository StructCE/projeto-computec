import { db } from "../../../../db";
import z from "zod";
import { protectedProcedure } from "../../../trpc";
import { notify } from "../../../../utils/notifications/notify";

export const updatePost = protectedProcedure
  .input(
    z.object({
      id: z.string(),
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
    const post = await db.post.findFirst({
      where: {
        id: input.id,
      },
      include: {
        images: true,
      },
    });
    const oldImagesId = post?.images.map((image) => image.id);
    const { images, ...data } = input.data;
    const updatedPost = await db.post.update({
      where: {
        id: input.id,
      },
      data: data,
    });
    images.forEach(async (image) => {
      await db.image.create({
        data: {
          public_id: image,
          post_id: updatedPost.id,
        },
      });
    });
    oldImagesId?.forEach(async (imageId) => {
      await db.image.delete({
        where: {
          id: imageId,
        },
      });
    });
    await notify({
      title: updatedPost.title,
      subtitle: updatedPost.subtitle,
      post_id: updatedPost.id,
    });

    return updatedPost;
  });
