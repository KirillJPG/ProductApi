import { Post } from '@/model/Post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Filter =  "like" | "all"

export interface productState {
  post:Post[],
  page:number,
  likes:number[],
  filter:Filter
}

const initialState: productState = {
  post:[],
  likes:[],
  page:1,
  filter:"all"
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPost(state,{payload}:PayloadAction<Post[]>){
      state.post = payload
    },
    setPage(state,{payload}:PayloadAction<number>){
      state.page = payload
    },
    setLike(state,{payload}:PayloadAction<number>){
      state.likes.push(payload)
    },
    setFilter(state,{payload}:PayloadAction<Filter>){
      state.filter = payload
    },
    removeLike(state,{payload}:PayloadAction<number>){
      state.likes = state.likes.filter(e=>e!=payload)
    },
  },
})

export const {actions:productActions,reducer:productReducer} = productSlice