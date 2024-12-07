import { useDeletePostMutation } from "@/service/Post.service"
import style from "./DeletePost.module.css"
import DeleteIcon from "@public/icon/delete.svg?react"
import { useNavigate } from "react-router"
import { links } from "@/constant/links"
import { useActions } from "@/hooks/useActions"
import { MouseEvent } from "react"

export function DeletePost({id}:{id:number}){
    const [deletePost] = useDeletePostMutation()
    const navigation = useNavigate()
    const {addHidden} = useActions()
    const onDelete = ( e:MouseEvent<HTMLDivElement> ) =>{
        e.preventDefault()
        deletePost(id)
        addHidden(id)
        navigation(links.products)
    }
    return (
        <div className={style.action} onClick={onDelete}>
            <DeleteIcon width={32} height={32} className={style.delete}/>
        </div>
    )
}