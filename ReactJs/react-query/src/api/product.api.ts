import type { AxiosResponse } from "axios";
import baseApi from "./baseApi"

export interface Product {
    id: number,
    name: string,
    price: number,
    inStock: boolean
}


export type GetAllProductsResponse = Product[];

export interface GetProductsPaginateResponse {
    "first": number | null
    "prev": number | null,
    "next": number,
    "last": number,
    "pages": number,
    "items": number,
    "data": GetAllProductsResponse;
}


export const GetAllProducts = async () => {
    return await baseApi.get<GetAllProductsResponse, AxiosResponse<GetAllProductsResponse>>("/products");
}

export const GetProductsByPagination = async (page: number, limit: number) => {
    return await baseApi.get<GetProductsPaginateResponse>(`/products?_page=${page}&_per_page=${limit}`);
}