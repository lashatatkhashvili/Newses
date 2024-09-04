import { Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/selectors/authSelectors";
import CloseIcon from "@mui/icons-material/Close";

const BurgerDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(selectUser);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={"right"}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#1E1F24D9",
        },
      }}
    >
      <div className="w-[220px] h-[100%] flex flex-col bg-[#FAFAFA] px-[15px] pb-[32px]">
        <div className="flex justify-end mt-[14px]">
          <button onClick={onClose}>
            <CloseIcon className="!text-[38px]" />
          </button>
        </div>
        <hr className="border-t border-gray-300 my-[14px]" />

        <ul className="flex flex-col gap-[16px] text-[16px] pb-[24px] font-medium text-[#FAF8F0]">
          <li
            onClick={() => navigate("/")}
            className={`flex items-center gap-[8px] text-[24px] text-black
                         hover:text-[#7C4EE4] cursor-pointer ${
                           pathname === "/" ? "!text-[#7C4EE4]" : ""
                         }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/news")}
            className={`flex items-center gap-[8px] text-[24px] text-black
            hover:text-[#7C4EE4] cursor-pointer ${
              pathname === "/news" ? "!text-[#7C4EE4]" : ""
            }`}
          >
            News
          </li>

          {!user && (
            <li
              onClick={() => navigate("/login")}
              className={`flex items-center gap-[8px] text-[24px] text-black
            hover:text-[#7C4EE4] cursor-pointer ${
              pathname === "/login" ? "!text-[#7C4EE4]" : ""
            }`}
            >
              Login
            </li>
          )}

          <li
            onClick={() => navigate("/profile")}
            className={`flex items-center gap-[8px] text-[24px] text-black
                hover:text-[#7C4EE4] cursor-pointer ${
                  pathname === "/profile" ? "!text-[#7C4EE4]" : ""
                }`}
          >
            Profile
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

export default BurgerDrawer;
