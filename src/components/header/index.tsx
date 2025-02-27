import { Search } from "@components/ui/search";
import settingIcon from "@assets/settings.svg";
import notificationIcon from "@assets/notification.svg";
import burgerIcon from "@assets/burger.svg";
import userIcon from "@assets/user.jpg";
import { useLocation } from "react-router";

const Icon = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="bg-grey-light flex size-12.5 shrink-0 items-center justify-center rounded-full">
      <img src={src} alt={title} title={title} />
    </div>
  );
};

export const Header = () => {
  const location = useLocation();

  const title = location.state?.title;

  return (
    <header className="bg-white px-8 py-5">
      <div className="flex flex-row items-center justify-between gap-x-6 max-sm:flex-wrap max-sm:gap-y-4">
        <img
          className="hidden shrink-0 items-center justify-center max-sm:order-1 max-sm:flex"
          src={burgerIcon}
          alt="burger"
          title="burger"
        />
        <h1 className="text-blue-dark grow text-3xl font-semibold max-sm:order-2 max-sm:grow-0">{title}</h1>
        <div className="max-sm:order-3 max-sm:shrink-0 max-sm:grow-1 max-sm:basis-full">
          <Search />
        </div>
        <div className="flex flex-row items-center justify-between gap-x-6 max-sm:hidden">
          <Icon src={settingIcon} title="setting" />
          <Icon src={notificationIcon} title="notification" />
        </div>
        <img
          className="bg-grey-light flex size-15 shrink-0 items-center justify-center rounded-full max-sm:order-2"
          src={userIcon}
          alt="user"
        />
      </div>
    </header>
  );
};
