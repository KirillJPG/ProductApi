import { BadRequest } from "@/model/BadRequest"
import style from "./ErrorRequest.module.css"

export function ErrorRequest({error}:{error:BadRequest}){
    return (
        <div className={style.error}>
            <div className={style.title}>Error</div>
            <div className={style.code}>code:{error.status}</div>
        </div>
    )
}