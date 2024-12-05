import { Post } from '@/model/Post'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface productState {
  post:Post[],
  page:number
}

const initialState: productState = {
  post:[],
  page:0
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
    }
  },
})

export const {actions:productActions,reducer:productReducer} = productSlice