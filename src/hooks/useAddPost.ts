import { IPost } from "../types/post.types";
import { useMutation } from "@tanstack/react-query";
import {postService} from "../services/post.service";

export const useAddPost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['add post'],
    mutationFn: async (newPost: Omit<IPost, 'id'>) => postService.setPost(newPost)
  })

  return {mutate, isPending}
}