import { Outlet } from "react-router"
import style from "./Layout.module.css"

export function Layout(){
    return (
        <div className={style.layout}>
            <Outlet />
        </div>
    )
}