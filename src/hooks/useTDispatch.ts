import { AppDispatch, RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"

export const useTDispatch = useDispatch.withTypes<AppDispatch>()
export const useTSelector = useSelector.withTypes<RootState>()