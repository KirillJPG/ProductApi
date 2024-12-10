import { links } from "@/constant/links"
import { UiLink } from "../ui/Link/UiLink"
import style from "./Header.module.css"
import { Wrapper } from "../Layout/Wrapper"
import { Search } from "../Search/Search"

export function Header(){
    return (
        <div className={style.header}>
            <Wrapper>
                <div className={style.content}>
                    <div className={style.links}>
                        <UiLink color="gray" to={links.home}>Home</UiLink>
                        <UiLink color="gray" to={links.products}>Products</UiLink>
                        <UiLink color="gray" to={links.create}>Create</UiLink>
                    </div>
                    <div className={style.center}>
                        <Search />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}