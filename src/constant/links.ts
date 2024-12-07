export const links = {
    home:"/",
    product:(id?:number)=>id ? "/product/"+id : "/product/:id",
    create:"/create"
}