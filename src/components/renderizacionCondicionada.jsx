import { useState, useEffect } from "react";

export default function RenderizacionCondicionada() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button
        onClick={() => setMostrar(!mostrar)}
        className="border-2 border-amber-200 bg-amber-500"
      >
        Soy un button
      </button>
      {/* Basicamente usas un ternario o condicional para condicionar la
      renderizacion de un componente. */}
      {mostrar && (
        <div className="bg-gray-700">
          Soy un componente con renderizado condicional
        </div>
      )}
    </div>
  );
}
