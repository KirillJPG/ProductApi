import clsx from "clsx";
import style from "./UiSpinner.module.css"
import SpinnerIcon from "@public/icon/spinner.svg?react"

type color = "primary" | "light" | "gray" | "white"
export function UiSpinner({color="primary"}:{color?:color}){
    let styleLink;

    switch (color){
        case "gray":
            styleLink = style.gray
            break
        case "light":
            styleLink = style.light
            break
        case "primary":
            styleLink = style.primary
            break
        case "white":
            styleLink = style.white
            break
    }

    return (
        <SpinnerIcon width={32} height={32} className={clsx(style.spinner,styleLink)}/>
    )
}