import { ReactNode } from "react"
import style from "./Wrapper.module.css"

export function Wrapper({children}:{children:ReactNode}){
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}