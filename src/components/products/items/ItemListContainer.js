import { useEffect,useState } from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../../customHooks/useFetch';
import { ProductCategoryError } from '../../../error/ProductCategoryError'

import { ScrollToTopButton } from '../../ScrollToTopButton';
import { Spinner } from '../../Spinner';

export const ItemListContainer = () => {
 const {id} =useParams();

 const{isLoading,dataFetched='test'}=useFetch({id});

// ---Si el width de la pantalla es menor a un valor, va a mostrar el boton scrollUp.Esto es para que se muestre solo en Mobile

const [windowWidth, setWindowWidth] = useState();


useEffect(()=>{
  const winWidth=()=>{
    const width=window.innerWidth;
    setWindowWidth(width);
  }
  
  window.onload=winWidth;
  window.onresize=winWidth;
console.log('cambia el width');
 
},[windowWidth])

  return (
    <>
      <h1 className="m-auto text-center mt-48 font-bold text-primary text-4xl 
        sm:ml-20 sm:mt-36 sm:text-6xl
        md:text-left md:ml-32
        lg:ml-56 ">
        {id}
      </h1>
   
      <div className="" >
        {isLoading?<Spinner/>:<ProductCategoryError id={id}
          dataFetched={dataFetched}
        /> }
      </div>
    

   {/* Controla el width del viewport para saber si mostrar o no el boton para hacer scroll to Top */}
    {
      windowWidth<700&&<ScrollToTopButton/>

    }
    </>
  )
}
