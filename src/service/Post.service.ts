import { baseUrl } from "@/constant/api";
import { FormEditPost, FormPost, Post } from "@/model/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IGetListRequest{
    page:number,
    hidden:number[]
}

export const postService = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl+"/posts"}),
    reducerPath:"userApi",
    tagTypes:["post"],
    refetchOnMountOrArgChange:true,
    endpoints:(build)=> ({
        getListPosts:build.query<Post[],IGetListRequest>({
            query:(prop)=>`?_page=${prop.page ?? 0}&${prop.hidden.map(e=>`id_ne=${e}&`)}`.replace(new RegExp(",","g"),""), // костыль из за отсутсвия обработки delete запросов
            providesTags:["post"],           
        }),
        getForwardListPosts:build.query<Post[],number[]>({
            query:(likes)=>`?${likes.map(e=>`id=${e}&`)}`.replace(new RegExp(",","g"),""), 
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
export const {useCreatePostMutation,useEditPostMutation,useGetListPostsQuery,useGetPostByIdQuery,useDeletePostMutation,useGetForwardListPostsQuery} = postService