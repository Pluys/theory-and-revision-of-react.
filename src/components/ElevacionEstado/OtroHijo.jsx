export default function OtroHijo({ handleMostrar, mostrar }) {
  return (
    <>
      <div className="bg-gray-500 mb-2 mt-2 border-1">
        Yo soy un hijo distinto, y hago exactamente lo mismo
        <br />
        <button
          onClick={handleMostrar}
          className="border border-purple-300 m-1 p-1 bg-purple-700 hover:cursor-pointer"
        >
          Mostrar contenido
        </button>
        {mostrar && <p>Te dije</p>}
      </div>
    </>
  );
}
