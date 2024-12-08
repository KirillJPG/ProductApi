import { Post } from '@/model/Post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Filter =  "like" | "all"

export interface productState {
  page:number,
  likes:Post[],
  hidden:number[],
  filter:Filter
}

const initialState: productState = {
  likes:[],
  hidden:[],
  page:1,
  filter:"all"
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPage(state,{payload}:PayloadAction<number>){
      state.page = payload
    },
    setLike(state,{payload}:PayloadAction<Post>){
      if (state.likes){
        state.likes.push(payload)
      }else{
        state.likes = []
        state.likes.push(payload)
      }
    },
    setFilter(state,{payload}:PayloadAction<Filter>){
      state.filter = payload
    },
    addHidden(state,{payload}:PayloadAction<number>){
      state.likes = state.likes.filter(e=>e.id != payload)
      if (state.hidden){
        state.hidden.push(payload)
      }else{
        state.hidden = []
        state.hidden.push(payload)
      }
    },
    removeLike(state,{payload}:PayloadAction<Post>){
      state.likes = state.likes.filter(e=>e.id!=payload.id)
    },
  },
})

export const {actions:productActions,reducer:productReducer} = productSlice