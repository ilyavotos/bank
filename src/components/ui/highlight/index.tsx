type Props = {
  type: "left" | "bottom";
};

export const Highlight = ({ type }: Props) => {
  const classes = {
    left: "top-0 h-full w-1.5 rounded-r-xl",
    bottom: "bottom-0 h-1 w-full rounded-t-xl",
  };
  return <span className={`bg-blue absolute left-0 hidden group-hover:block ${classes[type]}`} />;
};
