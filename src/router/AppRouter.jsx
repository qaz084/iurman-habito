
import {Routes,Route} from 'react-router-dom';
import Home from '../Home';

import { ItemDetailContainer, ItemListContainer,Cart, Navbar } from '../components';


export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/product/detail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            
            <Route path="/*" element={<Home/>}/>

        </Routes>
    </>
  )
}
