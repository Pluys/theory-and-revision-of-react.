import { useReducer } from "react";

//Se crea una funcion reductora. Resive solamente un objeto con la variable
// "type". Type va a indicar la acción que era la función reductora.
// El reducer también recibe el estado sin necesidad de especificarlo.
//Como el action.type es un string, simplemente se especifican las entradas
//en las que la función reductora va a hacer algo.

//Y si, se tiene que crear de antemano, para mayor legibilidad del codigo.

//El state es el estado, que contiene toda la información deseada.
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_BOOL":
      //Se tiene que devolver todo el estado denuevo, ya que lo reconstruye de cero.
      //Por eso el spread operator.
      //También se especifica el cambio que se hará.
      return {
        ...state,
        boolean: !state.boolean,
      };

    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };

    //acción de ejemplo, no implementada, pero librea que lo esté.
    case "DECREMENT_NUMBER":
      return {
        ...state,
        number: state.number - 1,
      };

    default:
      console.log("ACTION NOT SPECIFIED");
  }
}

export default function UseReducer() {
  //El use reducer recibe dos parametros; La funcion reductora
  //Que es la que tiene todas las acciones posibles para cambiar el estado,
  //Y el state, que tiene todos los estados dentro de un objeto
  //Y los devuelve en un array de dos posiciones y asincronos, similar al useState.
  const [state, dispatch] = useReducer(reducer, { number: 0, boolean: false });

  return (
    <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-5 border-2">
      <div className="p-2">
        Soy el componente con varios estados, y usa useReducer
        <br />
        Si tocas alguno de esos, cambian
        <br />
        <button
          //asi se llama a la funcion reductora. notar que el type esta en un objeto, que sería "action"
          onClick={() => dispatch({ type: "INCREMENT_NUMBER" })}
          className="bg-gray-700 w-fit hover:cursor-pointer border-2 mt-1 p-2"
        >
          Este es el estado 1: {state.number}
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_BOOL" });
          }}
          className="bg-gray-700 w-fit hover:cursor-pointer border-2 mt-2 *:mb-1 p-2"
        >
          Este es el estado 2: {state.boolean.toString()}
        </button>
        <br />
        El use reducer permite controlar multiples estados, y se pueden
        controlar libremente por el dispatch.
      </div>
    </div>
  );
}
