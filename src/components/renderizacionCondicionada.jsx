import { useState, useEffect } from "react";

export default function RenderizacionCondicionada() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button
        onClick={() => setMostrar(!mostrar)}
        className="border-2 border-amber-200 bg-yellow-600 mb-4 p-2"
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
