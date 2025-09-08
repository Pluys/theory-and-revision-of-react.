import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Fallback from "./components/fallback";

function App() {
  //En vez de hacer una importacion común, se utiliza la funcion "lazy",
  //para indicar que utilizará la tecnica de lazy loading.
  // dentro de lazy, se realiza la importacion con la función "import"
  const Home = lazy(() => import("./pages/home"));
  const Props = lazy(() => import("./pages/props"));
  const ContextZustand = lazy(() => import("./pages/context-zustand"));
  const Components = lazy(() => import("./pages/components"));
  const Forms = lazy(() => import("./pages/forms"));

  return (
    //El switch indica que habrá multiples "paginas."
    <Switch>
      {/* El Suspense es obligatorio al usar lazy loading, ya que se requiere mostrar algo al usuario
      mientras las paginas se estan renderizando. */}
      <Suspense fallback={<Fallback />}>
        {/* "path" es la direccion de la ruta que se utilizará en el componente
      <Link/> para redireccionar al usuario a dicha página. */}
        <Route path="/" component={Home} />
        <Route path="/props" component={Props} />
        <Route path="/persistencia" component={ContextZustand} />
        <Route path="/componentes" component={Components} />
        <Route path="/forms" component={Forms} />
      </Suspense>
    </Switch>
  );
}

export default App;
