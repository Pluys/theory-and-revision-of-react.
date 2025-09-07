import { useState } from "react";
import MiContexto from "./miContexto";

//El componente va a tener toda la data que queremos dar como contexto a sus hijos.
//Tambien recive como parametros children, aunque despues los hijos se ubican de la manera usual.
export default function ProovedorDelContexto({ children }) {
  const [boolean, setBoolean] = useState(false);
  const handleBoolean = () => setBoolean(!boolean);

  //Se indica que el contexto va a ser un proveedor, y se pasa el contexto como objeto a traves de "value".
  return (
    <MiContexto.Provider value={{ boolean, handleBoolean }}>
      {children}
    </MiContexto.Provider>
  );
}
