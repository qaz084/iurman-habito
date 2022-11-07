
import { validateUserRegister } from "../../helpers/validateUserRegister";

export const InputRegister = ({name,email,phone,onInputChange}) => {


  // const [validationState, setValidationState] = useState(false);

  return (
    <>
      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Nombre:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type='text'
          name='name'
          id=""
          placeholder='Escribe tu nombre'
          onChange={onInputChange}
          value={name}
        />
        {/* {validationState===false?<h1>ERROR</h1>:null
        } */}
      </div>
      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Email:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type='email'
          name='email'
          id=""
          placeholder='Escribe tu email:'
          onChange={onInputChange}
          value={email}
        />
        {/* {validationState===false?<h1>ERROR</h1>:null
        } */}
      </div>
      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Teléfono:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type='number'
          name='phone'
          id=""
          placeholder='Número de teléfono:'
          onChange={onInputChange}
          value={phone}
        />
        {/* {validationState===false?<h1>ERROR</h1>:null
        } */}
      </div>
 
    </>
  );
};
