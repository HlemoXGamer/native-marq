import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const baseUrl = "https://app.marqly.com/api";

const createRequest = (url, method, body) => ({
    url,
    method,
    body,
    headers: Headers,
});

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => {
                return createRequest("/login", "POST", credentials);
            },
        }),
        register: builder.mutation({
            query: (credentials) => {
                return createRequest("/register", "POST", credentials);
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
