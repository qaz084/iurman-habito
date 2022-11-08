import { createContext,useContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ContextUser=createContext();

export const useUserContext=()=>{
    return useContext(ContextUser);
}

export const UserContext = ({children}) => {

  const setUserInStorage=(key)=>{
    // useLocalStorage(key)

  }
  return (
    <ContextUser.Provider value={{
    setUserInStorage
    }}>
        {children}
    </ContextUser.Provider>
  )
}
