import { useState } from "react";
import HijoDelComponente from "./HijoDelComponente";
import OtroHijo from "./OtroHijo";

export default function ComponentePadreComun() {
  const [mostrar, setMostrar] = useState(0);

  return (
    <div className="border-4 bg-gray-600 p-2 mt-5">
      Soy el padre de los hijos que muestran informacion, solo permito que uno
      muestre informacion a la vez, y aplico elevacion del estado para eso
      (Contengo el estado que usan mis hijos, similar al prop drilling)
      <br />
      {/* Es mejor hacer un .map para crear esos dos, pero creo que queda mas visual así */}
      <HijoDelComponente
        mostrar={mostrar === 1} //le haces una operacion para que devuelva una expresion booleana, que es la que necesita el componente hijo.
        handleMostrar={() => setMostrar(1)} //traspaso de props similar al prop drilling
        key={1}
      />
      <HijoDelComponente
        mostrar={mostrar === 2}
        handleMostrar={() => setMostrar(2)}
        key={2}
      />
      <OtroHijo mostrar={mostrar === 3} handleMostrar={() => setMostrar(3)} />
      {mostrar == 0 && <br />}
      <button
        onClick={() => setMostrar(0)}
        className="border-4 p-2 bg-stone-500 hover:scale-105 transition active:scale-100 hover:cursor-pointer"
      >
        Resetear contenido
      </button>
    </div>
  );
}
