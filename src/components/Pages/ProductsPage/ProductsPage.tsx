import style from "./ProductsPage.module.css"
import { Filters } from "@/components/Filter/Filter"
import { Loading } from "@/components/ui/Loading/Loading"
import { useTSelector } from "@/hooks/useTDispatch"
import { lazy, Suspense } from "react"

const PostList = lazy(()=>import("@/components/Post/PostList"))
const FavoriteList = lazy(()=>import("@/components/Post/FavoriteList"))

export default function ProductsPage(){
    const filter = useTSelector(state=>state.product.filter)
    console.log(filter)
    return (
        <div className={style.products}>
            <Filters />
            <Suspense fallback={<Loading />}>
                {filter=="like" ? <FavoriteList /> : <PostList /> }
            </Suspense>
        </div>
    )
}