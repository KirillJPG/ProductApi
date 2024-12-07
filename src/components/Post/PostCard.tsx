import { Post } from "@/model/Post"
import style from "./PostCard.module.css"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"

export function PostCard({post}:{post:Post}){
    return (
        <div className={style.card}>
            <div className={style.title}>{post.title}</div>
            <div className={style.body}>{post.body}</div>
            <UiLink color="light"  to={links.product(post.id)}>View</UiLink>
        </div>
    )
}