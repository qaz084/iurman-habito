import { useContext, useState } from "react";
import { ContextCart } from "../../../context/CartContext";



export const CardProductsButtons = ({productQuantity}) => {
    
    const productsCounter=1;
    const {addItemToNavCart,navCart}=useContext(ContextCart);
    const[stockQuantity,setStockQuantity]=useState(productQuantity-productsCounter);


 // Counter State------------
    console.log(stockQuantity);
    
    const [moreProducts, setMoreProducts] = useState(productsCounter);

// Add Function------------
    const handleMoreProduct= () => {
        if(moreProducts<=productQuantity){

          setMoreProducts(moreProducts+1)
          setStockQuantity(stockQuantity-1)
        }
    }

// Subtract Function------------
    const handleSubtractProduct= () => {
        if(moreProducts>1){

            setMoreProducts(moreProducts-1);
            setStockQuantity(stockQuantity+1)
        }
    }

//HANDLER COLOR BUY BUTTON------------

const handlerColor= (e) => {

    const btn= e.currentTarget;
    console.log(btn);
    btn.classList.remove('btn-add-cart')
    btn.classList.add('btn-add-cart-added')
    btn.innerHTML ="v"
    
    setTimeout(() => {
        btn.classList.remove('btn-add-cart-added')
        btn.classList.add('btn-add-cart')
        btn.innerHTML ="Agregar al carrito"
    }, 1500);
}


  return (
    <div className="flex flex-col flex-none h-28 justify-between">
            <div className="flex flex-row mt-3   mx-6 items-center ">

                {/*----------- Subtract Button--------- */}

                <button onClick={handleSubtractProduct}  className=" btn-add-sub disabled">
                    <h2 className="font-extrabold text-xl  ">-</h2>
                </button>
        

             {/*----------- Product Counter--------- */}

                    <h2 className="w-2/3 m-auto text-center font-bold">{moreProducts}</h2>

         

                        {/*----------- Add Button--------- */}

                        <button onClick={handleMoreProduct} className="btn-add-sub "
                        disabled={(moreProducts>=productQuantity)||(navCart===productQuantity)}>
                     <h2 className="font-extrabold text-xl">+</h2>
                    </button>

                </div>

            {/*----------- Add to cart Button--------- */}

                <button className="btn-add-cart self-end"
                onClick={()=>addItemToNavCart(productQuantity,moreProducts,stockQuantity)}
                disabled={productQuantity===navCart}>
                        Agregar al carrito
                </button>

     </div>
  )
}
