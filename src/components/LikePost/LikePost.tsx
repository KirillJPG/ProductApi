import { useActions } from "@/hooks/useActions"
import style from "./LikePost.module.css"
import { useTSelector } from "@/hooks/useTDispatch"
import LikeIcon from "@public/icon/like.svg?react"
import clsx from "clsx"
import { MouseEvent } from "react"
import { Post } from "@/model/Post"

export function LikePost({post}:{post:Post}){
    const {setLike,removeLike} = useActions()
    const likes = useTSelector(state=>state.product.likes)
    const isLike = likes.find(e=>e.id==post.id) ? true : false

    const onLike = ( e:MouseEvent<HTMLDivElement> ) => {
        e.preventDefault()
        isLike ? removeLike(post) : setLike(post)
    }

    return (
        <div onClick={onLike}>
            <LikeIcon width={32} height={32} className={clsx(isLike ? style.liked : style.liking,style.action)}/>
        </div>
    )
}