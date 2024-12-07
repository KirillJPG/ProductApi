import { lazy } from "react"
import style from "./HomePage.module.css"

export default function HomePage(){
    return (
        <div className={style.home}>
           <div className={style.title}> Home page</div>
        </div>
    )
}