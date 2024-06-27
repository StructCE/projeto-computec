import z from 'zod';
import { db } from '../../../../db';
import { protectedProcedure } from '../../../trpc';

export const deleteImageFromPost = protectedProcedure
  .input(
    z.object({
      id: z.string(),
      data: z.object({
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
    oldImagesId?.forEach(async (imageId) => {
      await db.image.delete({
        where: {
          id: imageId,
        },
      });
    });
    return updatedPost;
  });
