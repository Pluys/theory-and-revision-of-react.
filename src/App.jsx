import NotUseState from "./components/notUseState";
import RenderizacionCondicionada from "./components/renderizacionCondicionada";
import UseReducer from "./components/useReducer";
import UseState from "./components/useState";
import componenteNoRenderizado from "./components/componenteNoRenderizado";
import Abuelo from "./components/PropDrilling/abuelo";
import ComponentePadreComun from "./components/ElevacionEstado/ComponentePadreComun";
import MiContexto from "./context/miContexto/miContexto";
import Context from "./components/context";
import Zustand from "./components/zustand";

function App() {
  return (
    <>
      <h1>oladw</h1>

      <div className="border-4 flex flex-wrap bg-gray-900 pb-1.5 pt-1.5 w-120 p-3">
        <UseState />
        <NotUseState />
        <p className="text-red-600">
          Basicamente, el usestate permite hacer cambios dinamicos a la pagina
          web.
        </p>
      </div>

      <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-5 p-2 w-128 border-2 h-32">
        <RenderizacionCondicionada />
      </div>

      <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-5 border-2">
        <UseReducer />
      </div>

      <componenteNoRenderizado />
      {/* Este no se renderiza pq los componentes tienen que tener su nombre en pascal
      case. "UnComponente" != "unComponente" */}

      <Abuelo />

      <ComponentePadreComun />

      <Context />
      <Zustand />
    </>
  );
}

export default App;
