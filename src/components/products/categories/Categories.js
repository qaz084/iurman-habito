
import { useParams } from "react-router-dom";
import { useFetch} from "../../../customHooks/useFetch";
import { Spinner } from "../../Spinner";
import { CardCategories } from "./CardCategories";

export const Categories = () => {
  const {id}=useParams();

   const {dataFetched,isLoading}=useFetch({id});

  return (
    <>
          <div className=" grid grid-cols-1 items-center justify-items-center mt-20 sm:mt-10 sm:grid-cols-2  " >
                <h1 className="text-primary ml-4 mb-12 font-bold text-4xl sm:m-auto md:text-4xl lg:text-6xl">Categorias</h1>
            
              {
               isLoading?<Spinner/>:dataFetched?.map(({name,id,img,description})=>{
    
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