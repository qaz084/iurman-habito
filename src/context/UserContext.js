import { createContext,useContext } from "react";

export const ContextUser=createContext();

export const useUserContext=()=>{
    return useContext(ContextUser);
}

export const UserContext = ({children}) => {
  return (
    <ContextUser.Provider value={'null'}>
        {children}
    </ContextUser.Provider>
  )
}
