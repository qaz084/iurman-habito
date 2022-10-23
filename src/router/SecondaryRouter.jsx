import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../Home';


import { ItemDetailContainer, ItemListContainer,Cart,SecondaryNavbar} from '../components';
import { useShoppingCart } from '../context/CartContext';



export const SecondaryRouter = () => {

 const {cart}=useShoppingCart();
 console.log('cartSHOPP :>> ', cart);
  return (
    <>
     
        <SecondaryNavbar/>
        <Routes>
          
        </Routes>
    </>
  )
}
