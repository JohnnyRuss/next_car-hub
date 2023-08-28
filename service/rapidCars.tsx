import axios from "axios";
import { RapidCarT } from "@/types/rapidCars";

const axiosRapidQuery = axios.create({
  baseURL: "https://cars-by-api-ninjas.p.rapidapi.com/v1",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
  },
});

export const getCars = async (params: {
  limit?: number;
  model?: string;
  manufacturer?: string;
  year?: number;
  fuel?: string;
}): Promise<RapidCarT[] | undefined> => {
  try {
    params.limit = params.limit || 12;
    const { data } = await axiosRapidQuery.get("/cars", { params });
    return data;
  } catch (error) {
    throw error;
  }
};
