
import {Routes,Route} from 'react-router-dom';
import Home from '../Home';

import { ItemListContainer } from '../components';

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ItemListContainer/>}/>

        </Routes>
    </>
  )
}
