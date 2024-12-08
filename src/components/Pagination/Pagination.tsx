import { useActions } from "@/hooks/useActions"
import style from "./Pagination.module.css"
import { useTSelector } from "@/hooks/useTDispatch"
import { UiButton } from "../ui/Button/UiButton"

export function Pagination(){
    const {setPage} = useActions()
    const {page,posts} = useTSelector(state=>state.product)
    const isLastPage =  (posts?.length < 10 ) || posts == undefined

    return (
        <div className={style.pagination}>
            <UiButton disabled={page<=1} onClick={()=>setPage(page-1)} color="primary" className={style.button}>-</UiButton>
            <div className={style.page}>{page ?? 1}</div>
            <UiButton disabled={ isLastPage } onClick={()=>setPage(page+1)} color="primary" className={style.button}>+</UiButton>
        </div>
    )
}