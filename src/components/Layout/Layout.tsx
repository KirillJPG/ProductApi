import { Outlet } from "react-router"
import style from "./Layout.module.css"
import { Header } from "../Header/Header"

export function Layout(){
    return (
        <div className={style.layout}>
            <Header />
            <Outlet />
        </div>
    )
}