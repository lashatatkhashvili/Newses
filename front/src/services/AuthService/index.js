import axiosInstance from "../../configs/axios";

class authService {
  static createUser = async (data) => {
    const response = await axiosInstance.post("/auth/sign-up", data);

    return response.data;
  };

  static loginUser = async (data) => {
    const response = await axiosInstance.post("/auth/login", data);

    return response.data;
  };
}

export default authService;
