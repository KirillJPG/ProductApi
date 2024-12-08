import { ButtonHTMLAttributes } from "react"
import style from "./UiButton.module.css"
import clsx from "clsx"

interface Button extends ButtonHTMLAttributes<HTMLButtonElement>{
    color: "white" | "gray" | "light" | "primary"
}
export function UiButton({color,...props}:Button){

    let styleButton = "" 

    switch (color){
        case "light":
            styleButton = style.light
            break
        case "primary":
            styleButton = style.primary
            break
        case "white":
            styleButton = style.white
            break
        case "gray":
            styleButton = style.gray
            break
    }
    return (
        <button {...props} className={clsx(props.className,style.button,styleButton)}/>
    )
}