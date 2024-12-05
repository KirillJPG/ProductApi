export interface Post{
    id:number,
    title:string,
    body:string,
    userId:number,
}
export interface FormPost{
    title:string,
    body:string
}

export interface FormEditPost{
    id:number,
    title:string,
    body:string,
}