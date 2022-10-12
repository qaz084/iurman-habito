export const getDataCategories=async()=>{

    const url= './data/categories.json';
    const response=await fetch(url);
    const {data}=await response.json();

   

    const dataCategories=data?.map(category => ({

        id:category.id,
        name:category.categories,
        description:category.longDescription,
        img:category.img
    
    }))

    return dataCategories;
}

