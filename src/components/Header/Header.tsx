import { links } from "@/constant/links"
import { UiLink } from "../ui/Link/UiLink"
import style from "./Header.module.css"

export function Header(){
    return (
        <div className={style.header}>
            <UiLink to={links.home}>Home</UiLink>
            <UiLink to={links.create}>Create</UiLink>
        </div>
    )
}