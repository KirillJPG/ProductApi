import { InputHTMLAttributes } from "react"
import style from "./InputField.module.css"
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form"
import clsx from "clsx"

interface InputField<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement>{
    register:UseFormRegister<T>,
    options:RegisterOptions<T>,
    name:Path<T>,
    error?:FieldError
}

export function InputField<T extends FieldValues>({register,options,name,error,...props}:InputField<T>){
    return (
        <label className={style.field}>
            <input {...props} className={clsx(props.className,style.input,error && style.error)} {...register(name,options)}/>
            {error && <p className={style.error}>{error.message}</p>}
        </label>
    )   
}