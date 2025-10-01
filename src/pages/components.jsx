import NavBar from "../components/nav-bar";
import NotUseState from "../components/notUseState";
import RenderizacionCondicionada from "../components/renderizacionCondicionada";
import UseReducer from "../components/useReducer";
import UseState from "../components/useState";
import componenteNoRenderizado from "../components/componenteNoRenderizado";
import SubTtitle from "../components/sub-title";

export default function Components() {
  return (
    <>
      <NavBar />

      <main className="p-3">
        <SubTtitle content={"Renderización condicional"} />
        <RenderizacionCondicionada />

        <componenteNoRenderizado />
        {/* Este componente no se renderiza porque los componentes tienen que tener su nombre en pascal
      case. "UnComponente" != "unComponente". Mas info en la consola al intentar renderizarlo. */}

        <SubTtitle content={"Componentes dinámicos"} />
        <div className="border-4 flex flex-wrap bg-gray-900 pb-1.5 pt-1.5 w-120 p-3 mt-5 mb-5">
          <UseState />
          <NotUseState />
          <p className="text-red-600">
            Basicamente, los estados permiten hacer cambios dinamicos a la
            pagina web.
          </p>
        </div>

        <UseReducer />
      </main>
    </>
  );
}
