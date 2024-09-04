import axiosInstance from "../../configs/axios";

class newsService {
  static getNewses = async (page = 1, limit = 10) => {
    const response = await axiosInstance.get(
      `/news?page=${page}&limit=${limit}`
    );

    return response.data;
  };
}

export default newsService;
