import { useState } from 'react'
import { Link } from 'react-router-dom'

import HabitoLogo from '../../images/logo_blanco.svg'
import HeaderImg1 from '../../images/header/banner_02.png'
import {CartWidget,Searchbar,UserWidget} from '../../components'

export const Navbar = () => {

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
        <Link to={'/'}>
           <img className=" w-20 mb-6 sm:mb-0 sm:w-40 cursor-pointer" src={HabitoLogo} alt="Habito white-logo"/>
        </Link>
      
        <Searchbar/>

        <div className="hidden sm:flex  sm:items-center sm:space-x-8">

            <UserWidget/>

            <Link to={'/cart'}>
             <CartWidget/>

            </Link>
            
        </div>
        
      </nav>
  
      <div className="flex items-center overflow-hidden w-fit bg-grey-100">
         <img  className="hidden sm:inline-block sm:scale-110  sm:mt-40" src={HeaderImg1} alt="Banner Habito HomePage"/>
      </div>

    </header>
  )
}

