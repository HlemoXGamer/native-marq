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

export const bookmarksApi = createApi({
    reducerPath: "bookmarksApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        createBookmark: builder.mutation({
            query: (bookmark) => {
                return createRequest(`/bookmarks`, "POST", bookmark);
            },
        }),
        getBoardBookmarks: builder.query({
            query: (id) => {
                return createRequest(`/boards/bookmarks/${id}`, "GET");
            },
        }),
        updateBookmark: builder.mutation({
            query: (payload) => {
                const { id, bookmark } = payload;
                return createRequest(
                    `/boards/bookmarks/${id}`,
                    "PUT",
                    bookmark
                );
            },
        }),
        deleteBookmark: builder.mutation({
            query: (id) => {
                return createRequest(`/boards/bookmarks/${id}`, "DELETE");
            },
        }),
        bulkDeleteBookmarks: builder.mutation({
            query: (ids) => {
                return createRequest(
                    `/boards/bookmarks/bulkDelete`,
                    "POST",
                    ids
                );
            },
        }),
        bulkMoveBookmarks: builder.mutation({
            query: (ids) => {
                return createRequest(`/boards/bookmarks/bulkMove`, "POST", ids);
            },
        }),
        bulkAssignTagsBookmarks: builder.mutation({
            query: (ids) => {
                return createRequest(
                    `/boards/bookmarks/bulkAssignTag`,
                    "POST",
                    ids
                );
            },
        }),
        bulkCopyBookmarks: builder.mutation({
            query: (ids) => {
                return createRequest(
                    `/boards/bookmarks/bulkAssignTag`,
                    "POST",
                    ids
                );
            },
        }),
    }),
});

export const {
    useCreateBookmarkMutation,
    useGetBoardBookmarksQuery,
    useUpdateBookmarkMutation,
    useDeleteBookmarkMutation,
    useBulkDeleteBookmarksMutation,
    useBulkMoveBookmarksMutation,
    useBulkAssignTagsBookmarksMutation,
    useBulkCopyBookmarksMutation,
} = bookmarksApi;
