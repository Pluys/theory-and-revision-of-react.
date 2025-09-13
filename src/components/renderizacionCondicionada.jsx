import { useState } from "react";

export default function RenderizacionCondicionada() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-5 p-2 w-128 border-2 h-32 min-h-fit">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="border-2 border-amber-200 bg-yellow-600 mb-4 p-2 h-fit hover:cursor-pointer"
      >
        Soy un button, y controlo el renderizado que {!mostrar && "no"} vez
      </button>

      {/* Se usa un ternario o condicional para condicionar la
      renderizacion de un componente. Si la condicion no se cumple,
      el componente no ser rendizará.*/}
      {mostrar && (
        <div className="bg-gray-700 p-1 border-4">
          Y yo soy el componente con renderizado condicional
        </div>
      )}

      {/*
      Ejemplo opcional.
      {mostrar ? (
        <p>Ahora mismito, la variable es verdadera</p>
      ) : (
        <p>La variable es falsita</p>
      )} */}
    </div>
  );
}
