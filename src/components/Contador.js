import React, {useState} from 'react'

export const Contador = () => {

const [sumador,setContador]=useState(1);

const addHandler = () => {
    
    setContador(sumador+1);
}

  return (
    <>
        .container
        <div>Resultado: {sumador}</div>
        <button className="bg-blue-400 m-4 p-4 rounded-md" onClick={addHandler}>Add</button>
        <button onclick={addHandler}>Substrac</button>
        <button>Reset</button>
    </>
  )
}
