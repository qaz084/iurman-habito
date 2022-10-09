
import { useFetchItems } from '../../../customHooks/useFetchItems';
import { Spinner } from '../../Spinner';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const{isLoading,items}=useFetchItems();


  return (
    <>

        {isLoading?<Spinner/>:<ItemList ItemData={items}/> }
      
    </>
  )
}
