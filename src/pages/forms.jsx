import NavBar from "../components/nav-bar";

//Las siguientes tres importaciones son escenciales. Si alguna importación falla,
//es posible que sea debido a que las tres provienen de tres paquetes distintos (npm i ....)
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

//Las validaciones se leen a través de objetos, y zod proporciona su creación con la funcion ".object"
const userValidation = z.object({
  //Es necesario que la key sea igual a el nombre de el input, dado a la función "register" especificamente
  Nombre: z
    .string()
    .nonempty("Es necesario rellenar el campo")
    .max(20, "Se a excedido del límite de caracteres"),

  //Estas funciones de zod son validaciones por si mismas.
  Apellido: z.string().min(5, "No cumple con el minimo de 5 caracteres"),

  //El primer campo de la funcion suele ser el requerimiento a cumplir,
  //y el segundo el mensaje correspondiente en caso de que se incumplan.
  Email: z.email("Formato de correo no válido."),
});

export default function Forms() {
  //Linea pesada con información.
  //El reset resetea todos los values de los inputs.

  //El handleSubmit es para que RHF use el form.
  //Intuitivamente, la función se ubica en el "onSubmit" del form.
  //La funcion puede recibir una variable, y esta se ejecutara onSubmit, como el handleSubmit.

  //FormState tiene varios atributos del form, y uno de ellos es "errors", que se llena de información si
  //es que no se cumplen con las validaciones dadas. Parte de esa información es el mensaje de error
  //que proporcionamos anteriormente.

  //El register es el más complejo. En términos simples, es una función que recibe un parámetro,
  //que sería lo que uno normalmente pondría en el campo "name". Se utiliza el spread operator en
  //esa register, y el input obtiene el campo "name" a través de eso.
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(userValidation) });
  //El resolver es el objeto con todas las validaciones que se harán.

  //función que se ejecutará en "onSubmit" gracias a handleSubmit.
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <NavBar />
      <main>
        <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
          Zod & RHF
        </h1>

        <form
          className="bg-violet-900 m-5 p-5 border-4 border-gray-300 flex flex-col"
          //A pesar de que esta sintaxis normalmente cause una sobrecarga de re-renderizados,
          //Esta es la manera de usar los forms con RHF.
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="border-l-1 p-5 m-2">
            <label htmlFor="Nombre">Nombre:</label>
            <input
              type="text"
              id="Nombre"
              {...register("Nombre")}
              className="border-2 rounded-[10px] ml-2 p-0.5"
            />
            <br />
            {/*
          La sintaxis es bastante simple.
          Si errors contiene un error para el campo "Nombre", lo muestra.
          Es importante remarcar el optional chaining, ya que "errors" no tendrá el atributo "Nombre"
          A menos de que exista un error de validación en el campo.
          */}
            {errors?.Nombre ? (
              <span className="text-gray-400">
                <em>* {errors.Nombre.message}</em>
              </span>
            ) : (
              <br />
            )}
          </div>

          <div className="border-l-1 p-5 m-2">
            <label htmlFor="Apellido">Apellido:</label>
            <input
              type="text"
              id="Apellido"
              {...register("Apellido")}
              className="border-2 rounded-[10px] ml-2 p-0.5"
            />
            <br />
            {errors?.Apellido ? (
              <span className="text-gray-400">
                <em>* {errors.Apellido.message}</em>
              </span>
            ) : (
              <br />
            )}
          </div>

          <div className="border-l-1 p-5 m-2">
            <label htmlFor="Email">Email:</label>
            <input
              type="text"
              id="Email"
              {...register("Email")}
              className="border-2 rounded-[10px] ml-2 p-0.5"
            />
            <br />
            {errors?.Email ? (
              <span className="text-gray-400">
                <em>* {errors.Email.message}</em>
              </span>
            ) : (
              <br />
            )}
          </div>

          <button className="border-2 rounded-2xl p-2 bg-violet-500 h-16 mt-5 active:scale-95 transition">
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
