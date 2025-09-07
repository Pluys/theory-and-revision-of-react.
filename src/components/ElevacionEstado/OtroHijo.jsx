export default function OtroHijo({ onChange, mostrar }) {
  return (
    <>
      <div className="bg-gray-500 mb-2 mt-2">
        Yo soy un hijo distinto, y hago exactamente lo mismo
        <br />
        <button
          onClick={onChange}
          className="border border-amber-200 bg-red-400 m-1"
        >
          Mostrar contenido
        </button>
        {mostrar && <p>Te dije</p>}
      </div>
    </>
  );
}
