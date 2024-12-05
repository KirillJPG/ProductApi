import style from "./NotFound.module.css"

export function NotFound(){
    return (
        <div className={style.container}>
            <div className={style.title}>Not Found(404)</div>
        </div>
    )
}