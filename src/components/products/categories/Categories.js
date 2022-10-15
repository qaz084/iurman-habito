
import { useFetchCategories } from "../../../customHooks/useFetchCategories";

import { CardCategories } from "./CardCategories";

export const Categories = () => {

  const {categories}=useFetchCategories();
  
  return (
    <>
          <div className=" grid grid-cols-1 items-center justify-items-center mt-20 sm:mt-10 sm:grid-cols-2  " >
                <h1 className="text-primary ml-4 mb-12 font-bold text-4xl sm:m-auto md:text-4xl lg:text-6xl">Categorias</h1>
            
           
              {categories.map(({name,id,img,description})=>{
    
                return   <CardCategories key={id}
                  title={name}
                  description={description}
                  image={img}
                  id={id}
                  />
              })
              }
          </div>
    </>
  )
}