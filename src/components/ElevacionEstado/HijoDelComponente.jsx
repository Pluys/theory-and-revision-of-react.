export default function HijoDelComponente({ handleMostrar, mostrar }) {
  return (
    <>
      <div className="bg-gray-500 mb-2 mt-2 border-1">
        Soy un hijo de mi papa, y muestro informacion si apretas el botón
        <br />
        <button
          onClick={handleMostrar}
          className="border border-amber-200 m-1 p-1 bg-orange-500 hover:cursor-pointer"
        >
          Mostrar contenido
        </button>
        {mostrar && <p>Esta es mi informacion, gracias por ver</p>}
      </div>
    </>
  );
}
