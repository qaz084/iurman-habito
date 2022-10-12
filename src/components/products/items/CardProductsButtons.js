import { useState } from "react"

export const CardProductsButtons = ({productQuantity}) => {
   

 // Counter State------------
    const productsCounter=1;
    
    const [moreProducts, setMoreProducts] = useState(productsCounter);

// Add Function------------
    const handleMoreProduct= () => {
        if(moreProducts<productQuantity){

            return  setMoreProducts(moreProducts+1);
        }
    }

// Subtract Function------------
    const handleSubtractProduct= () => {
        if(moreProducts>1){

            return  setMoreProducts(moreProducts-1);
        }
    }



  return (
    <div className="flex flex-col h-[32]">
            <div className="flex flex-row mt-4 mb-3 mx-6 items-center ">


            {/*----------- Add Button--------- */}

                    <button onClick={handleMoreProduct} className="btn-add-sub ">
                     <h2 className="font-extrabold text-xl">+</h2>
                    </button>

             {/*----------- Product Counter--------- */}

                    <h2 className="w-2/3 m-auto text-center font-bold">{moreProducts}</h2>

             {/*----------- Subtract Button--------- */}

                    <button onClick={handleSubtractProduct}  className=" btn-add-sub disabled">
                     <h2 className="font-extrabold text-xl  ">-</h2>
                    </button>

                </div>

            {/*----------- Add to cart Button--------- */}

                <button className="btn-add-cart">
                        Agregar al carrito
                </button>

     </div>
  )
}
