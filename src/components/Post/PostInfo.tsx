import { useParams } from "react-router"
import style from "./PostInfo.module.css"
import { useGetPostByIdQuery } from "@/service/Post.service"
import { Loading } from "../ui/Loading/Loading"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { BadRequest } from "@/model/BadRequest"

export function PostInfo(){
    const {id} = useParams<{id:string}>()
    const {data,isLoading,isError,error} = useGetPostByIdQuery(id)

    if (isLoading) {
        return <Loading />
    }
    if(isError){
        return <ErrorRequest error={error as BadRequest}/>
    }
    return (
        <div className={style.info}>
            <div className={style.title}>{data?.title}</div>
            <div className={style.body}>{data?.body}</div>
        </div>
    )
}