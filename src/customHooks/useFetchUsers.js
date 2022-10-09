import { useEffect,useState } from 'react';
import { getUsers } from '../helpers/getUsers';

export const useFetchUsers = () => {

    const [user, setUser] = useState([]);
    const[isLoading, setIsLoading]=useState(true);

    const newUsers=async()=>{
        const users=await getUsers();
        setUser(users);
        setIsLoading(false);
     
    }
  
  useEffect(()=>{
    newUsers();
  
  },[])
  return {
    user,
    isLoading
  }
}
