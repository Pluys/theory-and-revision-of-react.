import NavBar from "./nav-bar";

export default function Fallback() {
  return (
    <>
      <NavBar />
      <h1 className="bg-red-700 w-fit p-2 m-auto border-2 border-rose-500 mt-12">
        Cargando...
      </h1>
    </>
  );
}

// El fallback es, en simples terminos, una página que el usuario verá hasta que se termine
// de renderizar la página y recursos detrás de la técnica "lazy".
