import { useDeletePostMutation } from "@/service/Post.service"
import style from "./DeletePost.module.css"
import DeleteIcon from "@public/icon/delete.svg?react"

export function DeletePost({id}:{id:number}){
    const [deletePost,{data,error}] = useDeletePostMutation()
    return (
        <div className={style.action} onClick={()=>deletePost(id)}>
            <DeleteIcon width={32} height={32} className={style.delete}/>
        </div>
    )
}