import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { IPost } from "../types/post.types";
import { postService } from "../services/post.service";


const initialData: {data: IPost[]} = {
  data: [
    {
      body: 'Initial body',
      id: 0,
      title: 'Initial title',
      userId: 0,
    }
  ]
}

export const usePosts = (isEnabled: boolean) => {

  const {data, isSuccess, isError, isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getPosts(),
    select: (data) => data.data,
    enabled: isEnabled,
    initialData,
    staleTime: 1000,
  })

  useEffect(() => {
    if (isSuccess) console.log('All good')
  }, [isSuccess, data])
  useEffect(() => {
    if (isError) console.log('All bad')
  }, [isError])

  return {data, isLoading, isSuccess, isError}
}