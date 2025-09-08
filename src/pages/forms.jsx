import NavBar from "../components/nav-bar";
import * as z from "zod";

const formValidation = z.object({
  password: z
    .string()
    .nonempty("escribi algo aca")
    .max(20, "mas cortito")
    .min(5, "mas largo"),
});

export default function Forms() {
  return (
    <>
      <NavBar />

      <h1 className="w-fit border-2 border-rose-500 bg-rose-900 m-2 p-1 rounded-[5px]">
        Forms, Zod
      </h1>
      <form
        className="bg-blue-900 m-5 p-5 border-4 border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          const formData = new FormData(form);

          // formData.entries...
        }}
      >
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            className="border-2 rounded-[10px] ml-2 p-0.5"
          />
        </div>
      </form>
    </>
  );
}
