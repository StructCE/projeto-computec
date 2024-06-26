import { procedure } from "../../../trpc";
import { db } from "../../../../db";

export const getPosts = procedure.query(async () => {
  const posts = await db.post.findMany({
    include: {
      images: true,
    },
  });
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    subtitle: post.subtitle,
    created_at: post.created_at,
    images: post.images.map((image) => image.public_id),
  }));
});
