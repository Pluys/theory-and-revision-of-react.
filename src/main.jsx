import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProovedorDelContexto from "./context/miContexto/miContexto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Encierra a el componente al que le dará el contexto.
    Todos sus hijos reciben la posibilidad de obtener el contexto incondicionalmente. */}
    <ProovedorDelContexto>
      <App />
    </ProovedorDelContexto>
  </StrictMode>
);
