import Context from "../components/context";
import NavBar from "../components/nav-bar";
import UseEffect from "../components/useEffect";
import Zustand from "../components/zustand";

export default function ContextZustand() {
  return (
    <>
      <NavBar />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Context
      </h1>
      <Context />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Zustand
      </h1>
      <Zustand />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        useEffect
      </h1>
      <UseEffect />
    </>
  );
}
