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
      {/* El Suspense es obligatorio al usar lazy loading  ya que se requiere mostrar algo al usuario
      mientras las paginas y/o recursos  se estan renderizando.

       Y el Suspense también envuelve todas las rutas posibles,
       para indicar que se usará lazy loading en todas las rutas.*/}
      <Suspense fallback={<Fallback />}>
        {/* "path" es la direccion de la ruta que se utilizará en el componente
      <Link/> para redireccionar al usuario a dicha página.
      Es también la dirección que ve el usuario en la barra de búsqueda.*/}
        <Route path="/">
          <Home />
        </Route>
        {/* También es posible usar la sintaxis de abajo para las rutas.
        La propiedad "component" indica la página a la que llevará la ruta.*/}
        <Route path="/props" component={Props} />
        <Route path="/persistencia" component={ContextZustand} />
        <Route path="/componentes" component={Components} />
        <Route path="/forms" component={Forms} />
      </Suspense>
    </Switch>
  );
}

export default App;
