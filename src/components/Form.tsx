import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  bg-green-200 space-y-2 p-4  grid  text-lg"
      >
        <label className="" htmlFor="text">
          User Name
        </label>
        <input
          {...register("name")}
          id="text"
          type="text"
          className="  rounded-lg"
        />
        <label className="" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="  rounded-lg"
        />
        <button
          type="submit"
          className="border bg-blue-500 py-1 px-3 rounded-lg text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
