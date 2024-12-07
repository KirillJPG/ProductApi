import { Post } from "@/model/Post"
import style from "./PostCard.module.css"
import { UiLink } from "../ui/Link/UiLink"
import { links } from "@/constant/links"
import { Link } from "react-router"
import { DeletePost } from "../DeletePost/DeletePost"
import { LikePost } from "../LikePost/LikePost"

export function PostCard({post}:{post:Post}){
    return (
        <Link to={links.product(post.id)} className={style.cardLink}>
            <div className={style.card}>
                <div className={style.title}>{post.title}</div>
                <div className={style.body}>{post.body}</div>
                <div className={style.actions}>
                    <DeletePost id={post.id}/>
                    <LikePost id={post.id}/>
                </div>
            </div>
        </Link>
    )
}