import ComponentePadreComun from "../components/ElevacionEstado/ComponentePadreComun";
import NavBar from "../components/nav-bar";
import Abuelo from "../components/PropDrilling/abuelo";

export default function Props() {
  return (
    <>
      <NavBar />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Prop Drilling
      </h1>
      <Abuelo />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Elevacion del estado
      </h1>
      <ComponentePadreComun />
    </>
  );
}
