import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = localStorage.getItem("accessToken");
const Headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Autheraization: `Barear ${accessToken}`,
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

export const { useLoginMutation, useRegisterMutation } = tagsApi;
