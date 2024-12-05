import { productActions } from "@/store/slice/Product"
import { bindActionCreators } from "@reduxjs/toolkit"

import { useMemo } from "react"
import { useTDispatch } from "./useTDispatch"

export const rootActions ={    
    ...productActions
}
export function useActions(){
    const dispatch = useTDispatch()
    return useMemo(()=>bindActionCreators(rootActions,dispatch),[dispatch])
}
