import { LinkHTMLAttributes } from "react"
import style from "./UiLink.module.css"
import { Link, LinkProps } from "react-router"
import clsx from "clsx"

interface Link extends LinkProps{
    color: "white" | "gray" | "light" | "primary"
}
export function UiLink({color,...props}:Link){

    let styleLink = "" 

    switch (color){
        case "light":
            styleLink = style.light
            break
        case "primary":
            styleLink = style.primary
            break
        case "white":
            styleLink = style.white
            break
        case "gray":
            styleLink = style.gray
            break
    }
    return (
        <Link {...props} className={clsx(props.className,style.link,styleLink)}/>
    )
}