import { HTMLInputTypeAttribute } from "react";

type Props = {
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  name: string;
};

export const Input = ({ type = "text", placeholder, label, name }: Props) => {
  return (
    <div className="flex flex-col justify-start gap-y-3">
      <label htmlFor={label} className="text-base text-black">
        {label}
      </label>
      <input
        id={label}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
        className="border-white-blue text appearance-none rounded-2xl border-1 px-7 py-4 text-base focus:outline-none"
      />
    </div>
  );
};
