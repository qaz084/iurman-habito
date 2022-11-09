export const InputRegister = ({
  name,
  surname,
  email,
  phone,
  onInputChange,
}) => {
  return (
    <>
      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Nombre:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full focus:border focus:border-green-300"
          type="text"
          name="name"
          id=""
          placeholder="Escribe tu nombre"
          onChange={onInputChange}
          value={name}
        />
      </div>
      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Apellido:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type="text"
          name="surname"
          id=""
          placeholder="Escribe tu apellido"
          onChange={onInputChange}
          value={surname}
        />
      </div>

      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Teléfono:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type="number"
          name="phone"
          id=""
          placeholder="Número de teléfono:"
          onChange={onInputChange}
          value={phone}
        />
      </div>

      <div className="flex flex-column flex-wrap mb-5">
        <span className="block w-full">Email:</span>
        <input
          className="border-2 border-primary rounded-md p-1 w-full"
          type="email"
          name="email"
          id=""
          placeholder="Escribe tu email:"
          onChange={onInputChange}
          value={email}
        />
      </div>
    </>
  );
};
