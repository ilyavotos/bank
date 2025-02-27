import { Input } from "@components/ui/input";
import { ButtonSubmit } from "@components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProfileLogo } from "./logo";
import { ProfileSchema, profileSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {},
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<ProfileSchema> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="flex gap-13 max-sm:flex-col">
      <ProfileLogo />
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
        <Input
          label="Date of Birth"
          placeholder=""
          type="date"
          error={errors.dateBirth}
          {...register("dateBirth", { required: true })}
        />
        <Input
          label="Present Address"
          placeholder="San Jose, California, USA"
          error={errors.address}
          {...register("address")}
        />
        <Input label="City" placeholder="San Jose" error={errors.city} {...register("city")} />
        <Input label="Postal Code" placeholder="45962" error={errors.postalCode} {...register("postalCode")} />
        <Input required label="Country" placeholder="USA" error={errors.country} {...register("country")} />
        <div className="col-start-2 flex justify-end max-sm:col-start-1">
          <ButtonSubmit text="Save" />
        </div>
      </form>
    </div>
  );
};
