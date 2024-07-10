import { db } from "../../../../db";
import { procedure } from "../../../trpc";

export const getPosts = procedure.query(async () => {
  const posts = await db.post.findMany({
    include: {
      images: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    subtitle: post.subtitle,
    description: post.description,
    created_at: post.created_at,
    images: post.images.map((image) => image.public_id),
    dateTime: post.dateTime,
    local: post.local,
  }));
});
