import { useTSelector } from "@/hooks/useTDispatch"
import style from "./FavoriteList.module.css"
import { PostCard } from "./PostCard"

export default function FavoriteList(){
    let likes = useTSelector(state=>state.product.likes)
    
    return (
        <div className={style.likes}>
            <div className={style.title}>Favorite posts</div>
            <div className={style.list}>
                {likes.map((e,id)=><PostCard post={e} key={id}/>)}
            </div>
        </div>
    )
}