import { useState } from "react";

export default function RenderizacionCondicionada() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-5 p-2 w-128 border-2 h-32">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="border-2 border-amber-200 bg-yellow-600 mb-4 p-2 h-fit hover:cursor-pointer"
      >
        Soy un button, y controlo el renderizado que {!mostrar && "no"} vez
      </button>
      {/* Basicamente usas un ternario o condicional para condicionar la
      renderizacion de un componente. */}
      {mostrar && (
        <div className="bg-gray-700 p-1 border-4">
          Y yo soy el componente con renderizado condicional
        </div>
      )}
    </div>
  );
}
