export const getData=async(id)=>{
    
    const categoriesUrl= './data/categories.json';
    const productsUrl= './data/products.json';

    const response=await fetch(id?productsUrl:categoriesUrl);
    const {data}=await response.json();
    const dataFetched=data.map(info => ({
       ...info
    }))

    return dataFetched;
}

