import { baseUrl } from "@/constant/api";
import { FormEditPost, FormPost, Post } from "@/model/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const postService = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl+"/posts"}),
    reducerPath:"userApi",
    tagTypes:["post"],
    refetchOnReconnect:true,
    endpoints:(build)=> ({
        getListPosts:build.query<Post[],number>({
            query:(page)=>`?_start=${(page-1)*10}&_end=${page*10}&_limit=10`,
            providesTags:["post"],
        }),
        createPost:build.mutation<Post, FormPost>({
            query:(body)=>({
                url:"/",
                method:"POST",
                body
            }),
            invalidatesTags:["post"],
        }),
        editPost:build.mutation<Post, FormEditPost>({
            query:(body)=>({
                url:"/"+body.id,
                method:"PUT",
                body
            }),
            invalidatesTags:["post"],
        }),
    }),

})
export const {useCreatePostMutation,useEditPostMutation,useGetListPostsQuery} = postService