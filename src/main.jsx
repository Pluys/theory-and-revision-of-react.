import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProovedorDelContexto from "./context/miContexto/miContexto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProovedorDelContexto>
      <App />
    </ProovedorDelContexto>
  </StrictMode>
);
