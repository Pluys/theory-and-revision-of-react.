import { useContext, useEffect } from "react";
import MiContexto from "../context/miContexto/miContexto";
import { useZustand } from "../store/useZustand";

export default function UseEffect() {
  const { numerito } = useZustand();

  //El boolean es únicamente para el ejemplo opcional, se puede comentar en cualquier otro caso.
  const { boolean } = useContext(MiContexto);

  //Solo se llama la primera vez que se monta el componente.
  useEffect(
    () => console.log("Hola dev, bienvenido a la pagina de persistencia:3"),
    []
  );

  //Se llama cada vez que cambia la variable dentro del array (Puede ser mas de una.)
  //Y la primera vez que se monta.
  useEffect(() => {
    console.log("El contador de zustand es de:", numerito);
  }, [numerito]);

  //Ejemplo opcional, que utiliza context y zustand:
  /*
  useEffect(() => {
    console.log("Alguna de ambas persistencias cambió!");
  }, [numerito, boolean]);
  */

  return (
    <div className="border-2 bg-gray-500 mt-5 p-2">
      <p>
        Hola, yo uso el UseEffect, y yo muestro por consola cada actualizacion
        del contador de zustand.
      </p>
    </div>
  );
}
