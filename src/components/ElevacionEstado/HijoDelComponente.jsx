export default function HijoDelComponente({ onChange, mostrar }) {
  return (
    <>
      <div className="bg-gray-500 mb-2 mt-2">
        Soy un hijo de mi papa, y muestro informacion si apretas el botón
        <br />
        <button
          onClick={onChange}
          className="border border-amber-200 bg-amber-900 m-1"
        >
          Mostrar contenido
        </button>
        {mostrar && <p>Esta es mi informacion, gracias por ver</p>}
      </div>
    </>
  );
}
