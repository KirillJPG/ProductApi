import { useTSelector } from "@/hooks/useTDispatch"
import style from "./PostList.module.css"
import { useGetListPostsQuery } from "@/service/Post.service"
import { ErrorRequest } from "../ErrorRequest/ErrorRequest"
import { Loading } from "../ui/Loading/Loading"
import { PostCard } from "./PostCard"
import { BadRequest } from "@/model/BadRequest"


export default function PostList(){
    const listDelete = useTSelector(state=>state.product.hidden)
    const page = useTSelector(state=>state.product.page)
    const {data,isLoading,isError,error} = useGetListPostsQuery(page,{pollingInterval:60000})

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
    if (data == undefined){
        return <div className={style.posts}>
            <div className={style.title}>Not found posts</div>
        </div>
    }

    return (
        <div className={style.posts}>
            <div className={style.title}>List Post</div>
            <div className={style.list}>
                {data.filter(e=>!listDelete.includes(e.id)).map((e)=><PostCard post={e} key={e.id}/>)}
            </div>
        </div>
    )
}