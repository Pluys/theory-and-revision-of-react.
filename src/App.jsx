import NotUseState from "./components/notUseState";
import RenderizacionCondicionada from "./components/renderizacionCondicionada";
import UseReducer from "./components/useReducer";
import UseState from "./components/useState";
import componenteNoRenderizado from "./components/componenteNoRenderizado";
import Abuelo from "./components/PropDrilling/abuelo";
import ComponentePadreComun from "./components/ElevacionEstado/ComponentePadreComun";
import { useContext } from "react";
import MiContexto from "./context/miContexto/miContexto";
import Context from "./components/context";

function App() {
  return (
    <>
      <h1>oladw</h1>

      <div className="flex-col flex-wrap bg-gray-900 pb-1.5 pt-1.5">
        <UseState />
        <NotUseState />
        <p className="text-red-800">
          Basicamente, el usestate permite hacer cambios dinamicos a la pagina
          web.
        </p>
      </div>

      <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-10 p-2">
        <RenderizacionCondicionada />
      </div>

      <div className="flex row flex-wrap bg-gray-900 pb-1.5 pt-1.5 mt-10 border-2">
        <UseReducer />
      </div>

      <componenteNoRenderizado />
      {/* Este no se renderiza pq los componentes tienen que llamarse en pascal
      case. "UnComponente" != "unComponente" */}

      <Abuelo />

      <ComponentePadreComun />

      <Context />
    </>
  );
}

export default App;
