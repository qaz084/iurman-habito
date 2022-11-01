import { Link } from "react-router-dom"
import { ItemDetail} from "../components"

export const ProductDetailError = ({id,dataFetched}) => {

  return (
    <>
            {

            !dataFetched.name?
           <div className="flex flex-col md:mt-20 ml-56 items-start space-y-5">
               <h1 className="font-bold text-primary text-2xl 
                    sm:text-4xl
                       md:text-left 
                       ">No encontramos el producto: {id}</h1>
 
                       <Link to="/" className="text-blue-600 hover:underline">
                        <h2>Volver a la página principal</h2>    
                       </Link>
           </div>
           :<ItemDetail ItemDetail={dataFetched}/>

            }
    </>
  )
}
