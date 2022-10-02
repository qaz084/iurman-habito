import { CardCategories } from "./CardCategories"
import DataCategories from '../../../data/products.json'


export const Categories = () => {

  return (
    <>
     
          <div className=" grid grid-cols-1 items-center justify-items-center mt-40 sm:mt-10 sm:grid-cols-2  " >
    
  
           
                <h1 className="text-primary ml-4 mb-12 font-bold text-4xl sm:m-auto md:text-4xl lg:text-6xl">Categorias</h1>
            
          
    
              {DataCategories.map((category)=>{
    
                return <CardCategories key={category.id}
                  title={category.categories}
                  description={category.longDescription}
                  image={category.img}
                  id={category.id}
                  />
              })
              }
          </div>
   
   
    </>
  )
}