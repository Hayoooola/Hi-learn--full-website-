import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import ICourseData, { ICategoryID } from "../interfaces/course-data";

interface IFetchCourse {
    courseShortName: string,
    token: string | null;
}

const coursesApi = createApi({
    reducerPath: "courses",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1" }),
    endpoints: builder => ({

        fetchAllCourses: builder.query<ICourseData[], null>({
            query: () => ({
                url: "/courses"
            })
        }),

        fetchFavoriteCourses: builder.query<ICourseData[], void>({
            query: () => ({
                url: "/courses/popular"
            })
        }),

        fetchPreSellCourses: builder.query<ICourseData[], void>({
            query: () => ({
                url: "courses/presell"
            })
        }),

        fetchAllCategories: builder.query<ICategoryID[], void>({
            query: () => ({
                url: "category"
            })
        }),

        fetchSelectedCourse: builder.mutation<ICourseData, IFetchCourse>({
            query: ({ courseShortName, token }) => ({
                url: `/courses/${courseShortName}`,
                method: "POST",
                body: "",
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
        }),
    })
});

export const { useFetchAllCoursesQuery,
    useFetchFavoriteCoursesQuery,
    useFetchPreSellCoursesQuery,
    useFetchAllCategoriesQuery,
    useFetchSelectedCourseMutation } = coursesApi;
export default coursesApi;