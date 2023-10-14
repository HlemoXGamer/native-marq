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

export const tagsApi = createApi({
    reducerPath: "tagsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getBoardTags: builder.query({
            query: (id) => {
                return createRequest(`/boards/tags/${id}`, "GET");
            },
        }),
        getAllTags: builder.query({
            query: () => {
                return createRequest("/tags", "GET");
            },
        }),
        updateTag: builder.mutation({
            query: (id) => {
                return createRequest(`/tags/${id}`, "PUT");
            },
        }),
        deleteTag: builder.mutation({
            query: (id) => {
                return createRequest(`/tags/${id}`, "DELETE");
            },
        }),
    }),
});

export const {
    useGetBoardTagsQuery,
    useGetAllTagsQuery,
    useUpdateTagMutation,
    useDeleteTagMutation,
} = tagsApi;
