import { Input } from "@components/ui/input";
import { ButtonSubmit } from "@components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { SigninSchema, signinSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { authUser } from "../api";
import { useNavigate } from "react-router";

export const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninSchema>({
    resolver: zodResolver(signinSchema),
    defaultValues: {},
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<SigninSchema> = async (data) => {
    await authUser(data);
    return navigate("/");
  };

  return (
    <div className="flex flex-col gap-13">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-x-7 gap-y-5">
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
        <div className="col-start-2 flex justify-end max-sm:col-start-1">
          <ButtonSubmit text="Save" />
        </div>
      </form>
    </div>
  );
};
