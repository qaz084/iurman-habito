import { Link } from "react-router-dom"
import { ItemList } from "../components"

export const ProductCategoryError = ({id,dataFetched}) => {
  return (
    <>
            {

            dataFetched.length===0?
           <div className="flex flex-col md:mt-20 ml-56 items-start space-y-5">
               <h1 className="font-bold text-primary text-2xl 
                    sm:text-4xl
                       md:text-left 
                       ">No encontramos la categoría: {id}</h1>
 
                       <Link to="/" className="text-blue-600 hover:underline">
                        <h2>Volver a la página principal</h2>    
                       </Link>
           </div>
           :<ItemList ItemData={dataFetched}/>

            }
    </>
  )
}
