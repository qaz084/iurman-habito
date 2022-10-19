import {Routes,Route} from 'react-router-dom';
import Home from '../Home';

import { ItemDetailContainer, ItemListContainer,Cart,SecondaryNavbar} from '../components';


export const SecondaryRouter = () => {
  return (
    <>
     
        <SecondaryNavbar/>
        <Routes>
            <Route path="/product/detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            
            <Route path="*" element={<Home/>}/>

        </Routes>
    </>
  )
}
