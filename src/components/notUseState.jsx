export default function NotUseState() {
  let estado = 0;
  //Como no es un estado (A traves de un useState/Reducer), es sincrono.

  return (
    <div
      onClick={() => {
        estado = estado + 1;
        console.log(estado);
      }}
      className="bg-gray-700 w-fit p-5 rounded-2xl m-0.5"
    >
      ola, esto no es un useState
      <br />
      El estado es: {estado}
      <br />
      (El cambio tmb se muestra por consola)
      <br />
      Al hacer click en esta card, el estado aumenta
    </div>
  );
}
