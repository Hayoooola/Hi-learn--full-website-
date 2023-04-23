import { configureStore } from "@reduxjs/toolkit";

import authApi from "../API/authApi";
import coursesApi from "../API/coursesApi";
import menuApi from "../API/menusApi";
import userInfoReducer from "../features/userData";
import articleApi from "../API/articles";
import commentApi from "../API/comments";
import searchApi from "../API/search";
import cartState from "../features/cartState";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
        [articleApi.reducerPath]: articleApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        userInfo: userInfoReducer,
        userCart: cartState.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().
            concat(authApi.middleware).
            concat(coursesApi.middleware).
            concat(menuApi.middleware).
            concat(articleApi.middleware).
            concat(searchApi.middleware).
            concat(commentApi.middleware)

});

export default store;