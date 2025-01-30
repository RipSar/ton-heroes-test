import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { postService } from "../services/post.service";


export const usePostById = (id: number) => {

  const {data, isSuccess, isError, isLoading} = useQuery({
    queryKey: ['post', id],
    queryFn: () => postService.getPostById(id),
    select: data => data.data,
    enabled: !!id,
  })

  useEffect(() => {
    if (isSuccess) console.log('All good')
  }, [isSuccess, data])
  useEffect(() => {
    if (isError) console.log('All bad')
  }, [isError])

  return { post: data, isLoading, isSuccess, isError }
}