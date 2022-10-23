const url='/data/productsDetails.json';
export const  getProducts = async()=>{

    const response=await fetch(url);
    const {data}=await response.json();

    const products= data.map(product=>{
        return{
            
            ...product,
            category:product.categories
        }
    });
    return products;
}

