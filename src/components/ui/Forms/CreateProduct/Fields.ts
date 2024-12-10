import { FormPost } from "@/model/Post"
import {  Path, RegisterOptions,} from "react-hook-form"

interface Field{
    name:Path<FormPost>,
    options:RegisterOptions<FormPost>,
    placeholder:string,
}

export const FieldsCreateProduct:Field[] = [
    {
        name:"title",
        options:{
            required:{message:"Please required!",value:true},
            minLength:{message:"Min length 10!",value:10},
            maxLength:{message:"Max length 36!",value:36}
        },
        placeholder:"Title",
    },
    {
        name:"body",
        options:{
            required:{message:"Please required!",value:true},
            minLength:{message:"Min length 30!",value:30},
            maxLength:{message:"Max length 100!",value:100}
        },
        placeholder:"Body",

    },
]