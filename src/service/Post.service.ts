import { baseUrl } from "@/constant/api";
import { FormEditPost, FormPost, Post } from "@/model/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const postService = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl+"/posts"}),
    reducerPath:"userApi",
    tagTypes:["post"],
    refetchOnMountOrArgChange:true,
    endpoints:(build)=> ({
        getListPosts:build.query<Post[],number>({
            query:(page)=>`?_page=${page}`,
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
        getPostById:build.query<Post,any>({
            query:(id)=>"/"+id,
            providesTags:["post"],           
        }),
        editPost:build.mutation<Post, FormEditPost>({
            query:(body)=>({
                url:"/"+body.id,
                method:"PUT",
                body
            }),
            invalidatesTags:["post"],
        }),
        deletePost:build.mutation<Post, number>({
            query:(id)=>({
                url:"/"+id,
                method:"DELETE",
            }),
            invalidatesTags:["post"],
        }),
    }),

})
export const {useCreatePostMutation,useEditPostMutation,useGetListPostsQuery,useGetPostByIdQuery,useDeletePostMutation} = postService