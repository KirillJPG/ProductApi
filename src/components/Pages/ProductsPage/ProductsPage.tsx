import { PostList } from "@/components/Post/PostList"
import style from "./ProductsPage.module.css"
import { Filters } from "@/components/Filter/Filter"
import { useTSelector } from "@/hooks/useTDispatch"
import { FavoriteList } from "@/components/Post/FavoriteList"
 
export default function ProductsPage(){
    const filter = useTSelector(state=>state.product.filter)
    console.log(filter)
    return (
        <div className={style.products}>
            <Filters />
            {filter=="like" ? <FavoriteList /> : <PostList /> }
        </div>
    )
}