import Hijo from "./hijo";

export default function Padre({ cambiarNumero, numeroEnCuestion }) {
  return (
    <div className="border-2 border-green-600 bg-gray-700 p-3 m-2">
      hola, soy el Padre, y yo tengo la habilidad de cambiar el numero
      <br />
      {/* Esto seria el setNumero. de el abuelo.*/}
      <button
        onClick={() => cambiarNumero(numeroEnCuestion + 1)}
        className="border-2 bg-amber-900 mb-1 p-0.5 hover:cursor-pointer"
      >
        Aumentar numero desde el papa
      </button>
      {/* En este caso, el papa no muestra el numero, si no que lo pasa a su hijo
      como parametro. */}
      <Hijo numeroEnCuestion={numeroEnCuestion} />
    </div>
  );
}
