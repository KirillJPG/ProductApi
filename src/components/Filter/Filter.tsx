import { Filter } from "@/store/slice/Product"
import style from "./Filter.module.css"
import { useActions } from "@/hooks/useActions"
import { useTSelector } from "@/hooks/useTDispatch"
import clsx from "clsx"

export function Filters(){
    return (
        <div className={style.filters}>
            <div className={style.text}>Filter by:</div>
            <FilterCard label="All" value="all"/>
            <FilterCard label="Like" value="like"/>
        </div>
    )
}
function FilterCard({label,value}:{label:string,value:Filter}){
    const {setFilter} = useActions()
    const isSelect = useTSelector(state=>state.product.filter) == value
    return (
        <div className={clsx(isSelect && style.select ,style.filter)} onClick={()=>setFilter(value)}>{label}</div>
    )
}