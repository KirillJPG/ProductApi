import { useTSelector } from "@/hooks/useTDispatch"
import style from "./PostList.module.css"
import { useGetListPostsQuery } from "@/service/Post.service"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { Loading } from "../ui/Loading/Loading"
import { PostCard } from "./PostCard"
import { BadRequest } from "@/model/BadRequest"

export function PostList(){
    const page = useTSelector(state=>state.product.page)
    const {data,isLoading,isError,error} = useGetListPostsQuery(page,{pollingInterval:60000})
    console.log(data)
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
    return (
        <div className={style.posts}>
            <div className={style.title}>List Post</div>
            <div className={style.list}>
                {data?.map((e)=><PostCard post={e} key={e.id}/>)}
            </div>
        </div>
    )
}