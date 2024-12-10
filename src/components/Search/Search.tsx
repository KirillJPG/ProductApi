import { useGetAllPostsQuery } from "@/service/Post.service"
import style from "./Search.module.css"
import { InputHTMLAttributes, useState } from "react"
import { Loading } from "../ui/Loading/Loading"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"

export function Search(){
    const {data,isLoading} = useGetAllPostsQuery(null)
    const [text,setText] = useState("")
    return (
        <div className={style.search}>
            <input placeholder="Search..." className={style.input} value={text} onChange={e=>setText(e.target.value)}/>
            {text && <div className={style.dropdown}>
                {isLoading && <Loading />}
                {data?.filter(e=>e.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())).map((e,id)=><UiLink className={style.link} color="primary" to={links.product(e.id)} key={id}>{e.title}</UiLink>)}
            </div>}
        </div>
    )
}