import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children, className }: Props) => {
  return <div className={`rounded-3xl bg-white p-8 ${className}`}>{children}</div>;
};
