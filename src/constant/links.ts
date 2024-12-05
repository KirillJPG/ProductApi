export const links = {
    home:"home",
    product:(id:number)=>id ? "/product/"+id : "/product/:id",
    create:"create"
}