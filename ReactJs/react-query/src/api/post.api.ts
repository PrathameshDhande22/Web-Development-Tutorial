import type { AxiosResponse } from "axios";
import baseApi from "./baseApi"

export interface PostResponse {
    id: number,
    title: string,
    content: string
}

export type PostLists = PostResponse[]

export const postapi = async () => {
    return (await baseApi.get<PostLists>("/posts"));
}

export const getPostById = async (id: string): Promise<AxiosResponse<PostResponse>> => {
    return (await baseApi.get<PostResponse>(`/posts/${id}`));
}

export const createPost = async (post: PostResponse): Promise<PostResponse> => {
    const response = await baseApi.post<PostResponse>("/posts", post);
    return response.data;

}