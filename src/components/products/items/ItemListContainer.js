import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchItems } from '../../../customHooks/useFetchItems';
import { ScrollToTopButton } from '../../ScrollToTopButton';
import { Spinner } from '../../Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
 const {id} =useParams();

const{isLoading,items}=useFetchItems({id});
console.log('items :>> ', items);
// ---Si el width de la pantalla es menor a un valor, va a mostrar el boton scrollUp.Esto es para que se muestre solo en Mobile

const [windowWidth, setWindowWidth] = useState();

const winWidth=()=>{
  const width=window.innerWidth;
  setWindowWidth(width);
}

window.onload=winWidth;
window.onresize=winWidth;

  return (
    <>
      <h1 className="m-auto text-center mt-48 font-bold text-primary text-4xl 
        sm:ml-20 sm:mt-24 sm:text-6xl
        md:text-left md:ml-32
        lg:ml-56 ">
        {id}
      </h1>

      <div className="" >
        {isLoading?<Spinner/>:<ItemList ItemData={items}/> }
      </div>

   {/* Controla el width del viewport para saber si mostrar o no el boton para hacer scroll to Top */}
    {
      windowWidth<700&&<ScrollToTopButton/>

    }
    </>
  )
}
