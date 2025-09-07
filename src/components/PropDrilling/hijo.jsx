export default function Hijo({ numeroEnCuestion }) {
  return (
    <div className="border-2 border-green-900 bg-gray-950 p-2 m-2">
      hola, yo soy el Hijo
      <br />Y yo muestro el numero en cuestion, que es {numeroEnCuestion}
    </div>
  );
}
