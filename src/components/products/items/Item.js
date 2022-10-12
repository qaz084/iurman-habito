
import { CardProductsButtons } from './CardProductsButtons'

export const Item = ({ItemData}) => {
 
    const {img1,name,price,quantity}=ItemData;

  return (
    <>
        
    <div className="flex flex-col group w-52 mt-20 mx-auto max-w-screen-sm shadow-lg m-4 rounded-md overflow-hidden sm:justify-content
     ">
        
             {/* -------Image------------- */}
            <div className="cursor-pointer overflow-hidden">
             <img className="duration-700 ease-in hover:scale-110 h-full" src={img1} alt="" />
            </div>

            <div className="flex flex-col ">

                <div className="flex flex-col mt-3 ml-5">
                    <h4>{name}</h4>
                    <h2 className="text-primary font-bold text-2xl">${price}</h2>
                </div>

                {/* -------Buttons------------- */}
            
                <CardProductsButtons
                    productQuantity={quantity}
                />

            </div>

        </div>
    </>
  )
}
