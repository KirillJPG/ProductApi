import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Filter =  "like" | "all"

export interface productState {
  page:number,
  likes:number[],
  filter:Filter
}

const initialState: productState = {
  likes:[],
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
    },
    removeLike(state,{payload}:PayloadAction<number>){
      state.likes = state.likes.filter(e=>e!=payload)
    },
  },
})

export const {actions:productActions,reducer:productReducer} = productSlice