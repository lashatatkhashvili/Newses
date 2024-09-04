import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { selectUser } from "../../redux/selectors/authSelectors";
import { logout } from "../../redux/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center mt-[100px]">
        <p className="text-[#151411] text-[30px]">
          User: <span className="font-bold">{user?.fullName}</span>
        </p>

        <button
          className="mt-[20px] text-[20px] text-[#7C4EE4]"
          onClick={() => dispatch(logout())}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
