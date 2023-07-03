import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Your email is " + data.email);
  };

  return (
    <form
      action="#"
      method="POST"
      className="px-10 mt-8 md:flex md:max-w-xl md:space-x-4 md:mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:basis-2/3 relative">
        <input
          type="text"
          placeholder="Your email adress"
          className={`focus:outline-none border border-blue rounded-3xl px-6 py-3.5 text-sm w-full placeholder:text-paleBlue ${
            errors.email && "border-lightRed"
          }`}
          {...register("email", {
            required: "Whoops! It looks like you forgot to add your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please provide a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-lightRed text-xs text-center mt-2 md:text-left pl-6 mb-3 md:mb-0">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-3xl py-3.5 text-center text-sm w-full bg-blue text-white mt-4 drop-shadow-lg capitalize font-bold md:basis-1/3 md:mt-0 md:self-start hover:bg-blue/75 transition duration-500"
      >
        notify me
      </button>
    </form>
  );
};

export default Form;
