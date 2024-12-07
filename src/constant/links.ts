export const links = {
    home:"/",
    products:"/products",
    product:(id?:number)=>id ? "/product/"+id : "/product/:id",
    create:"/create-product"
}