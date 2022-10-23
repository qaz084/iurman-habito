import { useParams } from "react-router-dom";
import { useFetchProductDetail } from "../../../customHooks/useFetchProductDetail";
import { Spinner } from "../../Spinner";
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
  const {id} =useParams();
  const{isLoading,productDetail}=useFetchProductDetail({id});

  const product=productDetail[0];

  return (
    <>
      <div className="mt-32" >
        {isLoading?<Spinner/>:<ItemDetail ItemDetail={product}/> }
      </div>

    </>
  )
}
