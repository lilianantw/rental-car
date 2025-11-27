import { api } from "./api";
import type { CarsResponse, CarFilterParams, Car } from "@/types/car.types";

export const fetchCars = async (
  params: CarFilterParams = {}
): Promise<CarsResponse> => {
  const { data } = await api.get("/cars", { params });
  return data;
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};
