import { useForm, SubmitHandler } from "react-hook-form";
import ReactController from "./components/ReactController";
import Login from "./components/Login";
import Register from "./components/Register";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { firstName, lastName, age } = data
    console.log("El primer nombre es:", firstName);
    console.log("El segundo nombre es:", lastName);
    console.log("La eda es igual a :", age);


  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i, required: true })} />
        <input type="number" {...register("age", { min: 1, max: 99 })} />
        <input type="submit" />
      </form>
      <ReactController />
      <hr />
      <Login />
      <hr />
      <Register />
    </div>
  );
}