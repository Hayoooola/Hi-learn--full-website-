import { configureStore } from "@reduxjs/toolkit";

import authApi from "../API/authApi";
import coursesApi from "../API/coursesApi";
import menuApi from "../API/menusApi";
import userInfoReducer from "../features/userData";
import articleApi from "../API/articles";
import searchApi from "../API/search";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
        [articleApi.reducerPath]: articleApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
        userInfo: userInfoReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().
            concat(authApi.middleware).
            concat(coursesApi.middleware).
            concat(menuApi.middleware).
            concat(articleApi.middleware).
            concat(searchApi.middleware)

});

export default store;