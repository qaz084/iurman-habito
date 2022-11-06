import { useState } from "react";

export const useForm = (initialForm = {}) => {

  

 
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    const newValue=value.trim().toLowerCase();
    setFormState({
      ...formState,
      [name]: newValue,
    });
   
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
