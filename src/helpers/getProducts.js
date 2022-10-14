export const  getProducts = async()=>{

    const url='/data/productsDetails.json';
    const response=await fetch(url);
    const {data}=await response.json();

    const products= data?.map(product=>({

        ...product,
        quantity:product.stock,
        category:product.categories

    }));
    return products;
}

