import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";
const accessToken = SecureStore.getItemAsync("accessToken");

const Headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
};

const baseUrl = "https://app.marqly.com/api";

const createRequest = (url, method, body) => ({
    url,
    method,
    body,
    headers: Headers,
});

export const boardsApi = createApi({
    reducerPath: "boardsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getBoards: builder.query({
            query: () => {
                return createRequest("/boards", "GET");
            },
        }),
        createBoard: builder.mutation({
            query: (board) => {
                return createRequest("/boards", "POST", board);
            },
        }),
        updateBoard: builder.mutation({
            query: (payload) => {
                const { id, board } = payload;
                return createRequest(`/boards/${id}`, "PUT", board);
            },
        }),
        deleteBoard: builder.mutation({
            query: (payload) => {
                const { id, board } = payload;
                return createRequest(`/boards/${id}`, "DELETE", board);
            },
        }),
    }),
});

export const {
    useGetBoardsQuery,
    useCreateBoardMutation,
    useUpdateBoardMutation,
    useDeleteBoardMutation,
} = boardsApi;
