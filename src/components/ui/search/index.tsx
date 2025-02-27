import SearchIcon from "@assets/search.svg";

export const Search = () => {
  return (
    <div className="bg-grey-light flex h-fit items-center rounded-4xl px-6 py-4 font-medium">
      <button className="cursor-pointer" type="button">
        <img src={SearchIcon} alt="search" title="search" />
      </button>
      <input
        className="text-blue-light inline h-full w-full appearance-none pl-4 text-base font-normal focus:outline-none"
        type="text"
        placeholder="Search for something"
        aria-label="Full name"
      />
    </div>
  );
};
