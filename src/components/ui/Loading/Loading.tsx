import { UiSpinner } from "../Spinner/UiSpinner"
import style from "./Loading.module.css"

export function Loading(){
    return (
        <div className={style.loading}>
            <UiSpinner />
        </div>
    )
}