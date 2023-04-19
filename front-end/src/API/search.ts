import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import ISearch from "../interfaces/search";

const searchApi = createApi({
    reducerPath: "search",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1" }),
    endpoints: builder => ({

        fetchSearchResult: builder.query<ISearch, string>({
            query: (text) => ({
                url: `search/${text}`
            }),
        })
    })
});


export const { useFetchSearchResultQuery } = searchApi;
export default searchApi;