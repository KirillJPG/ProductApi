import { CreateProductForm } from "@/components/ui/Forms/CreateProduct/CreateProductForm"
import style from "./CreateProductPage.module.css"

export function CreateProductPage(){
    return (
        <div className={style.container}>
            <CreateProductForm />
        </div>
    )
}