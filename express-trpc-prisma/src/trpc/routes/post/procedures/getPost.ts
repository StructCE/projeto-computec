import { db } from "../../../../db";
import { procedure } from "../../../trpc";
import z from "zod";

export const getPost = procedure
  .input(z.object({ id: z.string() }))
  .query(async ({ input }) => {
    const post = await db.post.findFirst({
      where: {
        id: input.id,
      },
      include: {
        images: true,
      },
    });
    return post
      ? {
          ...post,
          images: post?.images.map((image) => image.public_id),
        }
      : undefined;
  });
