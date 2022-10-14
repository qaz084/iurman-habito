import { useParams } from "react-router-dom";

import { useFetchProductDetail } from "../../../customHooks/useFetchProductDetail";
import { Spinner } from "../../Spinner";
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {
  const {id} =useParams();
  const{isLoading,productDetail}=useFetchProductDetail({id});

  return (
    <>
       
      <div >
        {isLoading?<Spinner/>:<ItemDetail ItemDetail={productDetail}/> }

      </div>

    </>
  )
}
