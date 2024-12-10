import { useForm } from "react-hook-form"
import style from "./CreateProductForm.module.css"
import { FormPost } from "@/model/Post"
import { InputField } from "../../Field/InputField/InputField"
import { FieldsCreateProduct } from "./Fields"
import { UiButton } from "../../Button/UiButton"
import { useCreatePostMutation } from "@/service/Post.service"
import { useNavigate } from "react-router"
import { links } from "@/constant/links"
import { useActions } from "@/hooks/useActions"

export function CreateProductForm(){
    const {register,formState:{isValid,errors},handleSubmit} = useForm<FormPost>({mode:"all"})
    const [addPost] = useCreatePostMutation()
    const {createPost} = useActions()
    const navigation = useNavigate()
    const onSubmit = async (formData:FormPost) =>{
        const {data} = await addPost(formData)
        if ( data ){
            createPost(data)
        }
        navigation(links.products)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.title}>Create product</div>
            {FieldsCreateProduct.map((e)=> <InputField name={e.name} error={errors[e.name]} options={e.options} register={register} placeholder={e.placeholder}/>)}
            <UiButton disabled={!isValid} color="primary">Create</UiButton>
        </form>
    )
}