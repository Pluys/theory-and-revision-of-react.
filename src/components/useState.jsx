import { useState } from "react";

export default function UseState() {
  //El useState devuelve un array, con dos cosas;
  //El estado, y la funcion para cambiar el estado
  //Y como es molesto que esten en un array, usualmente se destructuriza
  const [estado, setEstado] = useState(0);
  //El useState es asincrono; El codigo no espera a que
  // el usestate se termine de ejecutar.
  return (
    <div
      //Se usa callback ya que setEstado requiere de parametros, y
      //De no tener el cb generaria un bucle infinito.
      onClick={() => {
        setEstado(estado + 1);
        console.log(estado);
      }}
      className="bg-gray-700 w-fit p-5 rounded-2xl m-0.5"
    >
      ola, esto es un useState
      <br />
      El estado es: {estado}
      <br />
      (El cambio tmb se muestra por consola)
      <br />
      Si haces click en esta card, aumenta el estado
    </div>
  );
}
