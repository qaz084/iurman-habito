import { useState } from 'react'

import HabitoLogo from '../../images/logo_blanco.svg'
import HeaderImg1 from '../../images/header/banner_02.png'

import CartWidget from '../cart/CartWidget'
import Searchbar from '../searchbar/Searchbar'
import UserWidget from '../user/UserWidget'

const Navbar = () => {

  // Seteo el estado para la transparencia del navbar

  const [navTheme, setNavTheme] = useState(false);

    // función que usa el State del nav
  const changeTheme=()=>{

    if(window.scrollY>=100){
      setNavTheme(true)
    }else{
      setNavTheme(false)
    }
  }

  window.addEventListener('scroll', changeTheme)

  return (

    <header className="grid sm:grid-rows-[minContent_minContent] " >

      <nav className={!navTheme?"nav-static":"nav-scroll"}>

{/* ---------------LOGO-------------- */}
        <img className=" w-20 mb-6 sm:mb-0 sm:w-40 cursor-pointer" src={HabitoLogo} alt="Habito white-logo"/>
      
        <Searchbar/>

        <div className="hidden sm:flex  sm:items-center sm:space-x-8">

            <UserWidget/>
            <CartWidget/>
            
        </div>
        
      </nav>
    
      <div className="flex items-center overflow-hidden w-fit bg-grey-100">
         <img  className="hidden sm:inline-block sm:scale-110  sm:mt-40" src={HeaderImg1} alt="Banner Habito HomePage"/>
      </div>

    </header>
  )
}

export default Navbar