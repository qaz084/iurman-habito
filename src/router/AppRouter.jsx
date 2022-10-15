
import {Routes,Route} from 'react-router-dom';
import Home from '../Home';

import { SecondaryRouter } from './SecondaryRouter';


export const AppRouter = () => {
  return (
    <>
     
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<SecondaryRouter/>}/>
          
        </Routes>
    </>
  )
}
