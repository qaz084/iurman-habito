import HabitoLogo from '../../images/logo_blanco.svg'
import HeaderImg1 from '../../images/header/banner_02.png'

import CartWidget from '../cart/CartWidget'
import Searchbar from '../searchbar/Searchbar'
import UserWidget from '../user/UserWidget'

const Navbar = () => {

  return (

    <header className="grid sm:grid-rows-[minContent_minContent] " >

      <nav className="fixed z-10 w-screen flex flex-col items-center mb-40 bg-primary shadow-[0_10px_10px_rgba(0,0,0,0.25)]  py-12 
      sm:flex-row  sm:justify-around sm:items-center sm:py-10 ">

        <img className=" w-20 mb-6 sm:mb-0 sm:w-40 cursor-pointer" src={HabitoLogo} alt="Habito white-logo"/>
      
        <Searchbar/>

        <div className="hidden sm:flex  sm:items-center sm:space-x-8">

            <UserWidget/>
            <CartWidget/>
            
        </div>
        
      </nav>
    
      <div className="flex items-center overflow-hidden w-fit bg-grey-100">
         <img  className="hidden sm:inline-block sm:scale-110  sm:mt-48" src={HeaderImg1} alt="Banner Habito HomePage"/>
      </div>

    </header>
  )
}

export default Navbar