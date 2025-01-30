import React from 'react';
import './App.css';
import { usePosts } from "./hooks/usePosts";
import { usePostById } from "./hooks/usePostById";
import { useQueryClient } from "@tanstack/react-query";
import {useAddPost} from "./hooks/useAddPost";


const isAuth = true

function App() {

  const {mutate, isPending} = useAddPost()
  const {data, isLoading} = usePosts(isAuth)
  const {post} = usePostById(1)

  const queryClient = useQueryClient()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Query
        </p>
        <button onClick={() => {
          queryClient.invalidateQueries({queryKey: ['posts']})
        }}>
          Invalidate posts
        </button>
        <button onClick={() => {
          mutate({
            body: 'New body',
            title: 'New title',
            userId: 1,
          })
        }}
        disabled={isPending}
        >
          {isPending ? 'Loading...' : 'Create'}
        </button>
        {isLoading
          ? 'Loading...'
          : data?.length
            ? data.map((post: any) => (<div key={post.id}>{post.title}</div>))
            : 'Not found'}
      </header>
    </div>
  );
}

export default App;
