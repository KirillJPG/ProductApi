import { PostList } from "@/components/Post/PostList"
import style from "./ProductsPage.module.css"
import { Filters } from "@/components/Filter/Filter"
import { useTSelector } from "@/hooks/useTDispatch"

 
export default function ProductsPage(){
    return (
        <div className={style.products}>
            <Filters />
            <PostList />
        </div>
    )
}