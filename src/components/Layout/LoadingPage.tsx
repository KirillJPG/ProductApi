import { ReactNode, Suspense } from "react";
import { Loading } from "../ui/Loading/Loading";

export function LoadingPage({children}:{children:ReactNode}){
    return (
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
    )
}