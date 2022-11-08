import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import HabitoLogo from "../../images/logo_blanco.svg";
import { CartWidget, Searchbar, UserWidget } from "../../components";
import { ContextCart } from "../../context/CartContext";
import { useChangeNavTheme } from "../../customHooks/useChangeNavTheme";
import { EmptyCartMessage } from "./EmptyCartMessage";
import { PopUpMenu } from "../user/PopUpMenu";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import { useCheckStorage } from "../../customHooks/useCheckStorage";
import { EmptyUserMessage } from "./EmptyUserMessage";

export const Navbar = () => {
  const { cartBag } = useContext(ContextCart);
  const [isBagEmpty, setIsBagEmpty] = useState(false);
  const [storage, setStorage] = useState('');
  const [userVisible, setUserVisible] = useState(false);



  const handleUserBagMessage = () => {
   
   const storageData= JSON.parse(localStorage.getItem('user'));
  //  console.log('storagedata',storageData)
  if(storageData){
    setStorage(storageData)
    
    setUserVisible(false);
    window.location.replace('/user')
    
  } else{
    setUserVisible(true)
    setTimeout(() => {
      setUserVisible(false);
    }, 2000);
  }

  };
  
  const handleCartBagMessage = () => {
    if (cartBag > 0) {
      setIsBagEmpty(false);
    } else {
      setIsBagEmpty(true);
      setTimeout(() => {
        setIsBagEmpty(false);
      }, 2000);
    }
  };
  
  //Custom Hook que maneja el theme del navbar, segun el scroll
  const navTheme = useChangeNavTheme();
  


  return (
    <header className="grid sm:grid-rows-[minContent_minContent] relative">
      <EmptyCartMessage isBagEmpty={isBagEmpty} />

      <EmptyUserMessage data={userVisible}/>

      <nav className={!navTheme ? "nav-static " : " nav-scroll "}>
      

        {/* ---------------LOGO-------------- */}
        <Link to={"/"}>
          <img
            className=" w-20 mb-6 sm:mb-0 sm:w-40 cursor-pointer"
            src={HabitoLogo}
            alt="Habito white-logo"
          />
        </Link>

        <Searchbar />

        <div className="  hidden sm:flex  sm:items-center sm:space-x-8">
{/* 
        {
          storage&&<Navigate to='/user'/>
          
        } */}

        <Link onClick={handleUserBagMessage}>
         <UserWidget  />
         </Link>
        
          
          <Link
            to={"/cart"}
            className=" relative flex items-center justify-center"
            onClick={handleCartBagMessage}
          >
            <CartWidget />

            {cartBag > 0 ? (
              <div className="absolute flex items-center justify-center top-3 left-3 w-6 h-6 rounded-full bg-green-400 text-primary font-bold">
                <span>{cartBag}</span>
              </div>
            ) : null}
          </Link>
        </div>
      </nav>
    </header>
  );
};
