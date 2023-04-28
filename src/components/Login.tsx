import { useForm, SubmitHandler } from "react-hook-form";
interface ILogin {
  username: string
  password: string
}
const Login = () => {
  const { register, handleSubmit } = useForm<ILogin>()
  const onSubmit: SubmitHandler<ILogin> = (data: any) => {
    console.log(data);

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username', { required: true })} />
        <input type="password" {...register('password', { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;