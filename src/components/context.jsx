import { useContext } from "react";
import MiContexto from "../context/miContexto/miContexto";

export default function Context() {
  // Se destructuriza el contexto deseado, en este caso siendo ambos valores del contexto.
  const { boolean, handleBoolean } = useContext(MiContexto);

  return (
    <div className="border-2 mt-5 mb-5 bg-gray-800 p-2">
      Yo soy el consumidor del contexto, y el valor boolean que me dieron es:{" "}
      <p className={`${boolean ? "text-green-600" : "text-rose-500"}`}>
        {boolean.toString()}
      </p>
      <br />
      <button
        onClick={handleBoolean}
        className="border border-blue-500 p-2 bg-blue-800 m-2"
      >
        Y Tambien lo puedo cambiar gracias al contexto si apretas acá
      </button>
    </div>
  );
}
