import { useState } from "react";
import Padre from "./padre";

export default function Abuelo() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="border-2 border-green-300 bg-gray-500 mt-12">
      Hola, soy el componente Abuelo, y uso el concepto de prop drilling
      <br />
      Tambien tengo el estado, osea, el numero y la manera de cambiarlo.
      <br />
      {/* Prop drilling es facil, solo tenes que pasar de parametro lo que queres
      que otro componente renderize.
      Y como lo va a tener, lo puede usar como quiera. */}
      <Padre cambiarNumero={setNumero} numeroEnCuestion={numero} />
      {/* Sidenote: como no invoco la funcion, no es necesario usar cb. solamente le
      paso el codigo de la funcion, para que el papa la invoque. */}
    </div>
  );
}
