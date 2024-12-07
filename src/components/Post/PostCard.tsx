import { Post } from "@/model/Post"
import style from "./PostCard.module.css"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"
import { Link } from "react-router"

export function PostCard({post}:{post:Post}){
    return (
        <Link to={links.product(post.id)} className={style.cardLink}>
            <div className={style.card}>
                <div className={style.title}>{post.title}</div>
                <div className={style.body}>{post.body}</div>
            </div>
        </Link>
    )
}