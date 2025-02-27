import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  error?: FieldError | undefined;
} & UseFormRegisterReturn;

export const Input = ({ required, type = "text", placeholder, label, error, ...props }: Props) => {
  return (
    <div className="flex flex-col justify-start gap-y-3">
      <label htmlFor={label} className="text-base text-black">
        {required && <span className="text-red-400">* </span>}
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        autoComplete="on"
        className="border-white-blue text appearance-none rounded-2xl border-1 px-7 py-4 text-base focus:outline-none"
        aria-invalid={error ? true : false}
        {...props}
      />
      {error && (
        <p role="alert" className="text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};
