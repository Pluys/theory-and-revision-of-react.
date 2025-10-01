import ComponentePadreComun from "../components/ElevacionEstado/ComponentePadreComun";
import NavBar from "../components/nav-bar";
import Abuelo from "../components/PropDrilling/abuelo";
import SubTtitle from "../components/sub-title";

export default function Props() {
  return (
    <>
      <NavBar />

      <main className="p-3">
        <SubTtitle content={"Prop Drilling"} />
        <Abuelo />

        <SubTtitle content={"Elevación del estado"} />
        <ComponentePadreComun />
      </main>
    </>
  );
}
