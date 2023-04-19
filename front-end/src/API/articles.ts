import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import ICourseData from "../interfaces/course-data";
import IArticle from "../interfaces/articles";

const articleApi = createApi({
    reducerPath: "article",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1" }),
    endpoints: builder => ({

        fetchAllPosts: builder.query<ICourseData[], void>({
            query: () => ({
                url: "/articles"
            })
        }),

        fetchSingleCourse: builder.query<IArticle, string>({
            query: (shortName) => ({
                url: `/articles/${shortName}`
            })
        })
    })
});

export const { useFetchAllPostsQuery, useFetchSingleCourseQuery } = articleApi;
export default articleApi;