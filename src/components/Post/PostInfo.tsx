import { useParams } from "react-router"
import style from "./PostInfo.module.css"
import { useGetPostByIdQuery } from "@/service/Post.service"
import { Loading } from "../ui/Loading/Loading"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { BadRequest } from "@/model/BadRequest"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"

export function PostInfo(){
    const {id} = useParams<{id:string}>()
    const {data,isLoading,isError,error} = useGetPostByIdQuery(id)
    console.log(error)
    if (isLoading) {
        return <Loading />
    }
    if(isError){
        return <ErrorRequest error={error as BadRequest}/>
    }
    return (
        <div className={style.info}>
            <div className={style.actions}>
                <UiLink color="primary" to={links.products} className={style.back}>Back</UiLink>
            </div>
            <div className={style.title}>{data?.title}</div>
            <div className={style.body}>{data?.body}</div>
        </div>
    )
}