import React from 'react'
import { CardProductsButtons } from './CardProductsButtons'

export const CardProductsDetail = ({img,productName,productPrice,productQuantity}) => {
    
  return (
    <>
         <h1 className=" m-auto font-bold text-primary text-4xl text-center mt-20">Modelo Product Card para próximo desafio</h1>
        <div className="flex flex-col group w-52 mt-20 mx-auto max-w-screen-sm shadow-lg m-4 rounded-md overflow-hidden">
        
             {/* -------Image------------- */}
            <div>
             <img className="" src={img} alt="" />
            </div>

            <div className="flex flex-col">

                <div className="flex flex-col mt-3 ml-5">
                    <h4>{productName}</h4>
                    <h2 className="text-primary font-bold text-2xl">${productPrice}</h2>
                </div>

                {/* -------Buttons------------- */}
            
                <CardProductsButtons
                    productQuantity={productQuantity}
                />

            </div>

        </div>
    </>
  )
}
