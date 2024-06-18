import { procedure } from "../../../trpc";
import { db } from "../../../../db";

export const getPosts = procedure.query(async () => {
  const posts = await db.post.findMany();
  return posts;
});
