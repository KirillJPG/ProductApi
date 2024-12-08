import style from "./PostList.module.css"
import { useGetForwardListPostsQuery, useGetListPostsQuery } from "@/service/Post.service"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { Loading } from "../ui/Loading/Loading"
import { PostCard } from "./PostCard"
import { BadRequest } from "@/model/BadRequest"
import { useTSelector } from "@/hooks/useTDispatch"
import { useEffect } from "react"
import { useActions } from "@/hooks/useActions"


export function PostList(){
    const {setPosts} = useActions()
    const {filter,hidden,likes,page} = useTSelector(state=>state.product)
    const {data,isLoading,isError,error,isFetching} = filter == "all" ? useGetListPostsQuery({hidden,page}) : useGetForwardListPostsQuery({page,likes:likes.length ? likes : [-1]}) 
    
    useEffect(()=>{
        setPosts(data!)
    },[data])
    if (isLoading || isFetching){
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
        return <NotFoundPosts/>
    }

    return (
        <div className={style.posts}>
            <div className={style.title}>List Post</div>
            <div className={style.list}>
                {data.map((e)=><PostCard post={e} key={e.id}/>)}  
            </div>
        </div>
    )
}

function NotFoundPosts(){
    return <div className={style.posts}>
        <div className={style.title}>Not found posts</div>
    </div>
}