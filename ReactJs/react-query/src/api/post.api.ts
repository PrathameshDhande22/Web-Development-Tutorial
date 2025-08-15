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