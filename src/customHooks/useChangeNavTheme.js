import { useState } from "react";

export const useChangeNavTheme = () => {
    const [navTheme, setNavTheme] = useState(false);
    // Seteo el estado para la transparencia del navbar


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
    navTheme
  )
}
