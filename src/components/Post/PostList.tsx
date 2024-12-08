import style from "./PostList.module.css"
import { useGetForwardListPostsQuery, useGetListPostsQuery } from "@/service/Post.service"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { Loading } from "../ui/Loading/Loading"
import { PostCard } from "./PostCard"
import { BadRequest } from "@/model/BadRequest"
import { useTSelector } from "@/hooks/useTDispatch"


export function PostList(){
    const {filter,hidden,likes,page} = useTSelector(state=>state.product)
    const {data,isLoading,isError,error} = filter == "all" ? useGetListPostsQuery({hidden,page}) : useGetForwardListPostsQuery(likes.length ? likes : [0])
    console.log(`?${likes.map(e=>`id=${e}&`)}`.replace(new RegExp(",","g"),""))
    if (isLoading){
        return (
            <Loading />
        )
    }
    if (isError){
        return(
            <ErrorRequest error={error as BadRequest}/>
        )
    }
    if (!data?.length || !data){
        return <div className={style.posts}>
            <div className={style.title}>Not found posts</div>
        </div>
    }
    console.log(data)
    return (
        <div className={style.posts}>
            <div className={style.title}>List Post</div>
            <div className={style.list}>
                {data.map((e)=><PostCard post={e} key={e.id}/>)}  
            </div>
        </div>
    )
}