import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const commentApi = createApi({
    reducerPath: "comment",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/v1" }),
    endpoints: builder => ({

        commitComment: builder.mutation({
            query: ({ courseShortName, body, score, token }) => ({
                url: "/comments",
                method: "POST",
                body: { courseShortName, body, score },
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
        })
    })
});


export const { useCommitCommentMutation } = commentApi;
export default commentApi;