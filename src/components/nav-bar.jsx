import { Link } from "wouter";

export default function NavBar() {
  return (
    <nav className="w-full bg-violet-600 h-26 sticky top-0 border-b-4 border-purple-800">
      <p className="text-center">Navbar hecha con wouter.</p>
      <br />
      <ul className="flex justify-around align-center">
        {/* En "to", se indica el path puesto en el "path" del <Route/> */}
        <Link
          to="/"
          className="border-r-2 border-l-2 p-2 h-fit text-center hover:scale-105 transition"
        >
          Home
        </Link>
        <Link
          to="/props"
          className="border-r-2 border-l-2 p-2 h-fit text-center hover:scale-105 transition"
        >
          Props
        </Link>
        <Link
          to="/persistencia"
          className="border-r-2 border-l-2 p-2 h-fit text-center hover:scale-105 transition"
        >
          Persistencia
        </Link>
        <Link
          to="/componentes"
          className="border-r-2 border-l-2 p-2 h-fit text-center hover:scale-105 transition"
        >
          Componentes
        </Link>
        <Link
          to="/forms"
          className="border-r-2 border-l-2 p-2 h-fit text-center hover:scale-105 transition"
        >
          Forms
        </Link>
      </ul>
    </nav>
  );
}
