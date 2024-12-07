import { Outlet } from "react-router"
import style from "./Layout.module.css"
import { Header } from "../Header/Header"
import { Wrapper } from "./Wrapper"
import { LoadingPage } from "./LoadingPage"

export function Layout(){
    return (
        <div className={style.layout}>
            <Header />
            <Wrapper>
                <LoadingPage>
                    <Outlet />
                </LoadingPage>
            </Wrapper>
        </div>
    )
}