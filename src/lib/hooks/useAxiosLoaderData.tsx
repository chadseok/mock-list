import { useLoaderData } from "react-router-dom";
import { AxiosResponse, isAxiosError } from "axios";

const useAxiosLoaderData = () => {
  try {
    const response = useLoaderData() as AxiosResponse;
    return response.data;
  } catch (error) {
    if (isAxiosError(error))
      throw new Error("서버 데이터를 불러오지 못했습니다");
  }
};

export default useAxiosLoaderData;
