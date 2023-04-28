import { useForm, SubmitHandler } from "react-hook-form";
interface IRegisterL {
  name: string
  birthday: string
  email: string
  password: string
  validate: boolean

}


const Register = () => {
  const { register, handleSubmit } = useForm<IRegisterL>()
  const onSubmit: SubmitHandler<IRegisterL> = (data) => {
    console.log(data);

  }
  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Juan" />
        <input type="date" {...register('birthday', { required: true })} placeholder="10-11-20" />
        <input {...register('email', { required: true })} placeholder="test@unsaac.edu.pe" />
        <input type="password"{...register('password', { required: true })} placeholder="*******" />
        <input type="checkbox" {...register('validate', { required: true })} />
        <input name="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Register;