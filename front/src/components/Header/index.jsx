import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../icons/Logo";
import { selectUser } from "../../redux/selectors/authSelectors";
import BurgerDrawer from "../BurgerDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(selectUser);

  return (
    <header>
      <nav className="flex justify-between md:justify-center items-center px-[16px] py-[24px]">
        <p className="md:absolute left-[14px]">
          <Logo />
        </p>

        <ul className="hidden md:flex items-center gap-[24px]">
          <li
            onClick={() => navigate("/")}
            className={`flex items-center gap-[8px] text-[18px] text-black
                         hover:text-[#7C4EE4] cursor-pointer ${
                           pathname === "/" ? "!text-[#7C4EE4]" : ""
                         }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/news")}
            className={`flex items-center gap-[8px] text-[18px] text-black
            hover:text-[#7C4EE4] cursor-pointer ${
              pathname === "/news" ? "!text-[#7C4EE4]" : ""
            }`}
          >
            News
          </li>
        </ul>

        <ul className="hidden md:flex items-center gap-[24px] absolute right-[14px]">
          {!user && (
            <li
              onClick={() => navigate("/login")}
              className={`flex items-center gap-[8px] text-[18px] text-black
            hover:text-[#7C4EE4] cursor-pointer ${
              pathname === "/login" ? "!text-[#7C4EE4]" : ""
            }`}
            >
              <LoginIcon />
              <span>Login</span>
            </li>
          )}
          <li
            onClick={() => navigate("/profile")}
            className={`flex items-center gap-[8px] text-[18px] text-black
                hover:text-[#7C4EE4] cursor-pointer ${
                  pathname === "/profile" ? "!text-[#7C4EE4]" : ""
                }`}
          >
            <PersonIcon />
            <span>Profile</span>
          </li>
        </ul>

        <button
          className="block md:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon className="!text-[40px]" />
        </button>
      </nav>

      <BurgerDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </header>
  );
};

export default Header;
