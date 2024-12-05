import { createSlice } from '@reduxjs/toolkit'

export interface productState {

}

const initialState: productState = {

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
})

export const {actions:productActions,reducer:productReducer} = productSlice