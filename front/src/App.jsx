import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import News from "./screens/News";
import Login from "./screens/Login";
import { selectUser } from "./redux/selectors/authSelectors";
import { getDataFromLocalStorage } from "./utils/localstorage";
import { setUserData } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userData = getDataFromLocalStorage("user");

  useEffect(() => {
    if (!user && userData) {
      dispatch(setUserData(userData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/profile" replace />}
          />

          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
