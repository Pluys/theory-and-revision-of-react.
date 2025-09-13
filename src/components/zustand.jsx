import { useZustand } from "../store/useZustand";

export default function Zustand() {
  const {
    numerito: numero,
    incrementarNumero,
    decrementarNumero,
    resetearNumero,
  } = useZustand();
  //useZustand contiene el objeto creado,
  //y se pueden obtener todos los datos del mismo destructurizando.

  //El resto funciona igual que context.
  return (
    <div className="border-2 bg-gray-900 p-2">
      Hola, yo soy el componente que usa la store de Zustand
      <br />
      Y yo uso todo, asi que te permito ver la tienda y usarla
      <br />
      Primero, tiene un numerito, que es{" "}
      <span className="text-rose-300">{numero}</span>, y podes cambiarlo con los
      metodos de la tienda:
      <br />
      <button
        onClick={() => incrementarNumero()}
        className="mr-2 border-2 bg-blue-500 h-7 w-7"
      >
        +
      </button>
      <button
        onClick={() => decrementarNumero()}
        className="mr-2 border-2 bg-blue-500 h-7 w-7"
      >
        -
      </button>
      <button
        onClick={() => resetearNumero()}
        className="mr-2 border-2 bg-blue-500 h-7 w-7"
      >
        0
      </button>
    </div>
  );
}
