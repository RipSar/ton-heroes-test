import axios from "axios";
import { IPost } from "../types/post.types";


class PostService {

  private URL = 'https://jsonplaceholder.typicode.com/posts'

  getPosts() {
    return axios.get<IPost[]>(this.URL)
  }

  getPostById(id: number) {
    return axios.get<IPost>(`${this.URL}/${id}`)
  }

  setPost(newPost: Omit<IPost, 'id'>) {
    return axios.post(this.URL, newPost)
  }
}

export const postService = new PostService()