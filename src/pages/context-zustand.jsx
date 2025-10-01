import Context from "../components/context";
import NavBar from "../components/nav-bar";
import SubTtitle from "../components/sub-title";
import UseEffect from "../components/useEffect";
import Zustand from "../components/zustand";

export default function ContextZustand() {
  return (
    <>
      <NavBar />

      <main className="p-3">
        <SubTtitle content={"Context"} />
        <Context />

        <SubTtitle content={"Zustand"} />
        <Zustand />

        <SubTtitle content={"useEffect"} />
        <UseEffect />
      </main>
    </>
  );
}
