import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import ITopBarMenu from "../interfaces/menus/topbar-menu";
import IMainMenu from "../interfaces/menus/main-menu";

const menuApi = createApi({
    reducerPath: "menu",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1" }),
    endpoints: builder => ({

        fetchTopMenu: builder.query<ITopBarMenu[], void>({
            query: () => ({
                url: "/menus/topbar"
            })
        }),

        fetchMainMenu: builder.query<IMainMenu[], void>({
            query: () => ({
                url: "/menus"
            })
        })
    })
});

export const { useFetchMainMenuQuery, useFetchTopMenuQuery } = menuApi;
export default menuApi;