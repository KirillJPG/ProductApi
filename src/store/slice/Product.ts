import { Post } from '@/model/Post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Filter =  "like" | "all"

export interface productState {
  page:number,
  likes:number[],
  hidden:number[],
  filter:Filter,
  posts:Post[],
  createPost:Post[]
}

const initialState: productState = {
  likes:[],
  hidden:[],
  page:1,
  filter:"all",
  posts:[],
  createPost:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createPost(state,{payload}:PayloadAction<Post>){
      if (state.createPost){
        state.createPost.push(payload)
      }else{
        state.createPost = []
        state.createPost.push(payload)
      }
    },
    setPosts(state,{payload}:PayloadAction<Post[]>){
      state.posts = payload
    },
    setPage(state,{payload}:PayloadAction<number>){
      if (state.page){
        state.page = payload
      }else{
        state.page = 1
      }
    },
    setLike(state,{payload}:PayloadAction<number>){
      if (state.likes){
        state.likes.push(payload)
      }else{
        state.likes = []
        state.likes.push(payload)
      }
    },
    setFilter(state,{payload}:PayloadAction<Filter>){
      state.filter = payload
      state.page = 1
    },
    addHidden(state,{payload}:PayloadAction<number>){
      state.likes = state.likes.filter(e=>e!=payload)
      state.createPost = state.createPost.filter(e=>e.id !=payload)
      if (state.hidden){
        state.hidden.push(payload)
      }else{
        state.hidden = []
        state.hidden.push(payload)
      }
    },
    removeLike(state,{payload}:PayloadAction<number>){
      state.likes = state.likes.filter(e=>e!=payload)
    },
    
  },
})

export const {actions:productActions,reducer:productReducer} = productSlice