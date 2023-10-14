import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthApi";
import { boardsApi } from "../services/BoardsApi";
import { bookmarksApi } from "../services/BookmarksApi";
import { tagsApi } from "../services/TagsApi";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [boardsApi.reducerPath]: boardsApi.reducer,
        [bookmarksApi.reducerPath]: bookmarksApi.reducer,
        [tagsApi.reducerPath]: tagsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            boardsApi.middleware,
            bookmarksApi.middleware,
            tagsApi.middleware,
        ]),
});

export default store;
