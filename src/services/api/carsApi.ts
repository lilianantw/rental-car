import { api } from "./api";
import type { CarsResponse, CarFilterParams, Car } from "@/types/car.types";


// * Получить список машин с фильтрами + пагинацией

export const fetchCars = async (
  params: CarFilterParams = {}
): Promise<CarsResponse> => {
  const { data } = await api.get("/cars", {
    params: {
      ...params,
      // обязательные параметры API (если их нет — API отдает ошибку)
      page: params.page ?? "1",
      limit: params.limit ?? "12",
    },
  });

  return data;
};


// * Получить одну машину по ID
 
export const fetchCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};
