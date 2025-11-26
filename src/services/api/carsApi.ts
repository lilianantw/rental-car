// src/services/carsApi.ts
import { api } from "./api";
import type { CarsResponse, CarFilterParams } from "@/types/car.types";

export const fetchCars = async (
  params: CarFilterParams = {}
): Promise<CarsResponse> => {
  const { data } = await api.get("/cars", { params });
  return data;
};

