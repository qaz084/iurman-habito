import {  useState } from "react"
export const useFormRegister = () => {
  
    const [name,setName]= useState('');
    const [email,setEmail] =useState('');
    const [phone,setPhone]= useState('');
 
    const handleSubmit = (e) => {
        console.log('SUBMITEO')
        e.preventDefault();
      }
    
      const handleName=(e)=>{
    
        const value= e.target.value.replace(/[^a-z]/gi, '').trim().toLowerCase();
        setName(value)
        console.log('NAME')
    
        }
        
      const handleEmail=(e)=>{
    
        const value= e.target.value.trim().toLowerCase();
        setEmail(value)
        console.log('MAIL')
    
        }
        
      const handlePhone=(e)=>{
    
        const value= e.target.value.trim().toLowerCase();
        setPhone(value)
        console.log('PHONE')
    
        }
   
    const inputs=[
        {type:'text', title:'Name:',name:'name', placeholder:'Escribe tu nombre',
    onChange:{handleName},
value:{name}},{type:'email',title:'Email:',name:'email',placeholder:'Escribe tu email',
    onChange:{handleEmail},
value:{email}},
        {type:'number',title:'Teléfono:',name:'phone',placeholder:'Escribe tu número',
    onChange:{handlePhone},
value:{phone}}
    ]
  return [

      inputs,
      handleName,
      handlePhone,
      handleEmail
  ]
  
}
