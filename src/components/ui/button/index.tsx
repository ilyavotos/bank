type Props = {
  text: string;
  disabled?: boolean;
};

export const ButtonSubmit = ({ text, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className="bg-blue w-1/2 rounded-2xl py-3.5 font-medium text-white max-sm:w-full"
      type="submit"
    >
      {text}
    </button>
  );
};
