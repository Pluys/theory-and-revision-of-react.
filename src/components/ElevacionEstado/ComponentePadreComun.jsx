import { useState } from "react";
import HijoDelComponente from "./HijoDelComponente";
import OtroHijo from "./OtroHijo";

export default function ComponentePadreComun() {
  const [mostrar, setMostrar] = useState(0);
  return (
    <div className="border-4 bg-gray-600 p-2 mt-5">
      Soy el padre de los hijos que muestran informacion, y aplico elevacion del
      estado (Contengo el estado que usan mis hijos, similar al prop drilling)
      {/* Es mejor hacer un .map para esos dos, pero creo que queda mas visual así */}
      <HijoDelComponente
        mostrar={mostrar === 1} //le haces una consulta para que devuelva una expresion booleana, que es la que necesita el componente hijo.
        onChange={() => setMostrar(1)}
        key={1}
      />
      <HijoDelComponente
        mostrar={mostrar === 2}
        onChange={() => setMostrar(2)}
        key={2}
      />
      <OtroHijo mostrar={mostrar === 3} onChange={() => setMostrar(3)} />
      <button onClick={() => setMostrar()} className="border-4">
        Resetear contenido
      </button>
    </div>
  );
}
