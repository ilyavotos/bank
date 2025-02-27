import { Input } from "@components/ui/input";
import { ButtonSubmit } from "@components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignupSchema, signupSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {},
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<SignupSchema> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="flex gap-13 max-sm:flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grow grid-cols-2 gap-x-7 gap-y-5 max-sm:grid-cols-1">
        <Input required label="Your Name" placeholder="Charlene Reed" error={errors.name} {...register("name")} />
        <Input
          required
          label="Email"
          placeholder="charlenereed@gmail.com"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          required
          label="Password"
          placeholder="********"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <Input required label="Country" placeholder="USA" error={errors.country} {...register("country")} />
        <div className="col-start-2 flex justify-end max-sm:col-start-1">
          <ButtonSubmit text="Save" />
        </div>
      </form>
    </div>
  );
};
