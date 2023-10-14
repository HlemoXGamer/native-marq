import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthApi";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
