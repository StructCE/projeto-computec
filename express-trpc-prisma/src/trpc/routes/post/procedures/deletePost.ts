import { db } from "../../../../db";
import z from "zod";
import { protectedProcedure } from "../../../trpc";

export const deletePost = protectedProcedure
  .input(z.object({ id: z.string() }))
  .mutation(async ({ input }) => {
    const deletedPost = await db.post.delete({
      where: {
        id: input.id,
      },
    });
    return deletedPost;
  });
