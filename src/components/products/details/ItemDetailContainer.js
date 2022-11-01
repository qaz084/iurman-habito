import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductDetail } from "../../../customHooks/useFetchProductDetail";
import { ProductDetailError } from '../../../error/ProductDetailError'
import { Spinner } from "../../Spinner";

export const ItemDetailContainer = () => {

  const {id} =useParams();
  const{isLoading,productDetail}=useFetchProductDetail({id});


  return (
    <>
      <div className="mt-32" >
        {isLoading?<Spinner/>:<ProductDetailError id={id} dataFetched={productDetail}/> }
      </div>

    </>
  )
}
