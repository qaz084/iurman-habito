

import { useParams } from 'react-router-dom';
import { useFetchItems } from '../../../customHooks/useFetchItems';
import { Spinner } from '../../Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
 const {id} =useParams();

    const{isLoading,items}=useFetchItems({id});
     
   
  return (
    <>
     <h1 className=" m-auto font-bold text-primary text-4xl text-center mt-20">Modelo Product Card para próximo desafio</h1>

      <div >
        {isLoading?<Spinner/>:<ItemList ItemData={items}/> }

      </div>
      
    </>
  )
}
