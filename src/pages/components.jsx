import NavBar from "../components/nav-bar";
import NotUseState from "../components/notUseState";
import RenderizacionCondicionada from "../components/renderizacionCondicionada";
import UseReducer from "../components/useReducer";
import UseState from "../components/useState";
import componenteNoRenderizado from "../components/componenteNoRenderizado";

export default function Components() {
  return (
    <>
      <NavBar />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Renderizacion condicional
      </h1>
      <RenderizacionCondicionada />
      <componenteNoRenderizado />
      {/* Este no se renderiza pq los componentes tienen que tener su nombre en pascal
      case. "UnComponente" != "unComponente". Mas info en la consola. */}

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Componentes dinamicos
      </h1>
      <div className="border-4 flex flex-wrap bg-gray-900 pb-1.5 pt-1.5 w-120 p-3 mt-5 mb-5">
        <UseState />
        <NotUseState />
        <p className="text-red-600">
          Basicamente, el usestate permite hacer cambios dinamicos a la pagina
          web.
        </p>
      </div>
      <UseReducer />
    </>
  );
}
