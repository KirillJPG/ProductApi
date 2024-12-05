import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { productReducer } from './slice/Product'


const persistConfig = {
    key: 'root',
    storage,
  }

const roodReducer = combineReducers({
  product:productReducer
})
const persistedReducer = persistReducer(persistConfig,roodReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
})
export const persistore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch