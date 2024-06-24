import { createTRPCRouter } from "../../trpc";
import {
  getPost,
  getPosts,
  updatePost,
  createPost,
  deletePost,
} from "./procedures";

export const postRouter = createTRPCRouter({
  getPosts: getPosts,
  getPost: getPost,
  deletePost: deletePost,
  updatePost: updatePost,
  createPost: createPost,
});
