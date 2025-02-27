import { Input } from "@components/ui/input";
import { ButtonSubmit } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { ProfileLogo } from "./logo";
import { profileDataForm } from "./data";
import { ProfileSchema, profileSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const Profile = () => {
  const { register, handleSubmit } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  return (
    <div className="flex gap-13 max-sm:flex-col">
      <ProfileLogo />
      <form className="grid grow grid-cols-2 gap-x-7 gap-y-5 max-sm:grid-cols-1">
      <Input {...register("name")} {...data} />
        {profileDataForm.map((data, index) => (
          <Input key={index} {...register("name")} {...data} />
        ))}
        <div className="col-start-2 flex justify-end max-sm:col-start-1">
          <ButtonSubmit text="Save" />
        </div>
      </form>
    </div>
  );
};
