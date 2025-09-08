import { create } from "zustand";
import { persist } from "zustand/middleware";

//Creamos una fucion  handler, que recibe set (Set tiene como parametro el objeto que estamos creando,
// definido como "state")

//Y la funcion devuelve un objeto.
//El objeto es el "contexto".
const handler = (set) => ({
  numerito: 0,

  //Las funciones devuelven un objeto, que va a tener lo que se cambia del "contexto",
  //siendo en este caso, "numerito".
  incrementarNumero: () => set((state) => ({ numerito: state.numerito + 1 })),
  decrementarNumero: () => set((state) => ({ numerito: state.numerito - 1 })),

  //Como no usamos datos previos del state, simplemente no se pasa como parametro.
  resetearNumero: () => set(() => ({ numerito: 0 })),
});
//A pesar de decirle a las funciones que el nuevo objeto va a tener un solo valor, zustand
//entiende que solo queres modificar esa propiedad, y reconstruye el resto del objeto por vos.

//la funcion "create" recibe ese "contexto", y hace toda la magia por detrás.
//la funcion "persist", hace que persista entre recargas de página la información.
//si se le desea, se puede poner una key específica, con un objeto con una propied "name".
export const useZustand = create(persist(handler, { name: "miZustanzito" }));

//recomiendo revisar el local storage de la pagina.
//Notese como zustand no necesita envolver a los componentes a los que les otorga su "contexto"
//Simplemente se llama a la funcion.

/*
PD:
De preferir que no se persistan los datos, comentar la linea 26 y descomentar la siguiente:
*/

//export const useZustand = create(handler);
