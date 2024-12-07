import { useParams } from "react-router"
import style from "./PostInfo.module.css"
import { useGetPostByIdQuery } from "@/service/Post.service"
import { Loading } from "../ui/Loading/Loading"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { BadRequest } from "@/model/BadRequest"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"
import { LikePost } from "../LikePost/LikePost"
import { DeletePost } from "../DeletePost/DeletePost"

export function PostInfo(){
    const {id} = useParams<{id:string}>()
    const {data,isLoading,isError,error} = useGetPostByIdQuery(id)
    if (isLoading) {
        return <Loading />
    }
    if(isError){
        return <ErrorRequest error={error as BadRequest}/>
    }
    if (data == undefined){
        return (
            <div className={style.notfound}>
                <div className={style.titleNotFound}>Post not found</div>
            </div>
        )
    }
    return (
        <div className={style.info}>
            <div className={style.actions}>
                <UiLink color="primary" to={links.products} className={style.back}>Back</UiLink>
                <LikePost post={data}/>
                <DeletePost id={data.id}/>
            </div>
            <div className={style.title}>{data.title}</div>
            <div className={style.body}>{data.body}</div>
        </div>
    )
}