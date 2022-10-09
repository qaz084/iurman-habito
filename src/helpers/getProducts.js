export const  getProducts = async()=>{

    const url='./data/productsDetails.json';
    const response=await fetch(url);
    const {data}=await response.json();

    const products= data?.map(product=>({

        id:product.id,
        price:product.price,
        name:product.name,
        img1:product.img1,
        quantity:product.stock

    }));
    return products;
}

