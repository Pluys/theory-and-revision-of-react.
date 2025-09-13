export default function NotUseState() {
  let variable = 0;
  //Como no es un estado (A traves de un useState/Reducer), es sincrono.

  return (
    <button
      onClick={() => {
        variable = variable + 1;
        console.log(variable);
      }}
      className="bg-gray-700 w-fit p-5 rounded-2xl m-0.5 text-left hover:cursor-pointer"
    >
      ola, esto no es un useState
      <br />
      La variable es: {variable}
      <br />
      (El cambio tmb se muestra por consola)
      <br />
      Al hacer click en esta card, la variable aumenta
    </button>
  );
}
