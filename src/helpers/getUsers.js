export const getUsers=async()=>{

    const url= './data/users.json';
    const response=await fetch(url);
    const data=await response.json();
 
    const users= data.map(user=>({

       id:user.id,
       name:user.nombre,
       email:user.email,
       img:user.imagen

    }));

    return users;
}