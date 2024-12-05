import { useTSelector } from "@/hooks/useTDispatch"
import { useGetListPostsQuery } from "@/service/Product.service"
import { ErrorRequest } from "@/components/ErrorRequest/ErrorRequest"
import { Loading } from "@/components/ui/Loading/Loading"
import { BadRequest } from "@/model/BadRequest"

export function HomePage(){
    const page = useTSelector(state=>state.product.page)
    const {data,isLoading,isError,error} = useGetListPostsQuery(page)

    if (!isLoading){
        return (
            <Loading />
        )
    }
    if (isError){
        return(
            <ErrorRequest error={error}/>
        )
    }
    return (
        <div className="">
            
        </div>
    )
}