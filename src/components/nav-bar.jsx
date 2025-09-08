import { Link } from "wouter";

export default function NavBar() {
  return (
    <nav className="w-full bg-violet-600 h-26 sticky top-0 border-b-4 border-rose-500">
      <p className="text-center">Navbar hecha con wouter.</p>
      <br />
      <ul className="flex justify-around align-center">
        <Link to="/" className="border-r-2 border-l-2 p-2 h-fit">
          Home
        </Link>
        <Link to="/props" className="border-r-2 border-l-2 p-2 h-fit">
          Props
        </Link>
        <Link to="/persistencia" className="border-r-2 border-l-2 p-2 h-fit">
          Persistencia
        </Link>
        <Link to="/componentes" className="border-r-2 border-l-2 p-2 h-fit">
          Componentes
        </Link>
        <Link
          to="/forms"
          className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px] mt-auto"
        >
          W.I.P.
        </Link>
      </ul>
    </nav>
  );
}
