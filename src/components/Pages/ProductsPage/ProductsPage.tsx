import { PostList } from "@/components/Post/PostList"
import style from "./ProductsPage.module.css"
import { Filters } from "@/components/Filter/Filter"
import { Pagination } from "@/components/Pagination/Pagination"

export default function ProductsPage(){

    return (
        <div className={style.products}>
            <Filters />
            <PostList />
            <Pagination />
        </div>
    )
}