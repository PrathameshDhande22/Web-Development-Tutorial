import type { AxiosResponse } from "axios";
import baseApi from "./baseApi";

export interface TodoResponse {
    id: number;
    task: string;
    completed: boolean;
}

export type TodoLists = TodoResponse[];

export const todoApi = async (): Promise<AxiosResponse<TodoLists, unknown>> => {
    return (await baseApi.get<TodoLists>("/todo"));
}