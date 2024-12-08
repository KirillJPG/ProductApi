import { useActions } from "@/hooks/useActions"
import style from "./LikePost.module.css"
import { useTSelector } from "@/hooks/useTDispatch"
import LikeIcon from "@public/icon/like.svg?react"
import clsx from "clsx"
import { MouseEvent } from "react"

export function LikePost({id}:{id:number}){
    const {setLike,removeLike} = useActions()
    const likes = useTSelector(state=>state.product.likes)
    const isLike = likes.find(e=>e==id) ? true : false

    const onLike = ( e:MouseEvent<HTMLDivElement> ) => {
        e.preventDefault()
        isLike ? removeLike(id) : setLike(id)
    }

    return (
        <div onClick={onLike}>
            <LikeIcon width={32} height={32} className={clsx(isLike ? style.liked : style.liking,style.action)}/>
        </div>
    )
}