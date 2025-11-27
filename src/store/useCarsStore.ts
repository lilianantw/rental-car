import { create } from "zustand";
import { fetchCars } from "@/services/api/carsApi";
import type { Car, CarFilterParams } from "@/types/car.types";

type CarsState = {
  cars: Car[];
  loading: boolean;
  page: number;
  hasMore: boolean;

  // filters
  brand: string | null;
  price: string | null;
  mileageFrom: string | null;
  mileageTo: string | null;

  setBrand: (value: string | null) => void;
  setPrice: (value: string | null) => void;
  setMileageFrom: (value: string | null) => void;
  setMileageTo: (value: string | null) => void;

  loadCars: (params?: CarFilterParams, append?: boolean) => Promise<void>;
  searchWithFilters: () => void;
  loadMore: () => void;
};

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  loading: false,
  page: 1,
  hasMore: true,

  brand: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,

  setBrand: (value) => set({ brand: value }),
  setPrice: (value) => set({ price: value }),
  setMileageFrom: (value) => set({ mileageFrom: value }),
  setMileageTo: (value) => set({ mileageTo: value }),

  loadCars: async (params = {}, append = false) => {
    const { page } = get();
    set({ loading: true });

    try {
      const data = await fetchCars({
        page: String(page),
        limit: "12",
        ...params,
      });

      set({
        cars: append ? [...get().cars, ...data.cars] : data.cars,
        hasMore: data.cars.length === 12,
      });
    } finally {
      set({ loading: false });
    }
  },

  searchWithFilters: () => {
    set({ page: 1 });

    const { brand, price, mileageFrom, mileageTo, loadCars } = get();
    const params: CarFilterParams = {};

    if (brand) params.brand = brand;
    if (price) params.rentalPrice = price;
    if (mileageFrom) params.minMileage = mileageFrom;
    if (mileageTo) params.maxMileage = mileageTo;

    loadCars(params, false);
  },

  loadMore: () => {
    const next = get().page + 1;
    set({ page: next });

    const { brand, price, mileageFrom, mileageTo, loadCars } = get();

    const params: CarFilterParams = {};
    if (brand) params.brand = brand;
    if (price) params.rentalPrice = price;
    if (mileageFrom) params.minMileage = mileageFrom;
    if (mileageTo) params.maxMileage = mileageTo;

    loadCars({ ...params, page: String(next) }, true);
  },
}));
