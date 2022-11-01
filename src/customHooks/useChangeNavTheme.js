import { useState } from "react";

export const useChangeNavTheme = () => {
    const [navTheme, setNavTheme] = useState(false);
  
    // Segun el scroll hace que el nav sea transparente
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
