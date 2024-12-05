import { LinkHTMLAttributes } from "react"
import style from "./UiLink.module.css"
import { Link, LinkProps } from "react-router"
import clsx from "clsx"

interface Link extends LinkProps{

}
export function UiLink({...props}:Link){
    return (
        <Link {...props} className={clsx(props.className,style.link)}/>
    )
}