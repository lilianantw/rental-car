"use client";

import { useEffect, useState } from "react";

import Filters from "@/components/catalog/Filters/Filters";
import CarsList from "@/components/catalog/CarsList/CarsList";
import LoadMoreButton from "@/components/ui/LoadMoreButton/LoadMoreButton";

import { fetchCars } from "@/services/api/carsApi";
import type { Car, CarFilterParams } from "@/types/car.types";

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  const [brand, setBrand] = useState<string | null>(null);
  const [price, setPrice] = useState<string | null>(null);
  const [mileageFrom, setMileageFrom] = useState<string | null>(null);
  const [mileageTo, setMileageTo] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadCars = async (params: CarFilterParams = {}, append = false) => {
    setLoading(true);

    try {
      const data = await fetchCars({
        page: String(page),
        limit: "12",
        ...params,
      });

      if (append) {
        setCars((prev) => [...prev, ...data.cars]);
      } else {
        setCars(data.cars);
      }

      setHasMore(data.cars.length === 12);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
  }, []);

  const currentParams = () => {
    const params: CarFilterParams = {};
    if (brand) params.brand = brand;
    if (price) params.rentalPrice = price;
    if (mileageFrom) params.minMileage = mileageFrom;
    if (mileageTo) params.maxMileage = mileageTo;
    return params;
  };

  const handleSearch = () => {
    setPage(1);
    loadCars(currentParams(), false);
  };

  const handleLoadMore = () => {
    const next = page + 1;
    setPage(next);
    loadCars({ ...currentParams(), page: String(next) }, true);
  };

  return (
    <main className="container">
      <Filters
        brand={brand}
        price={price}
        mileageFrom={mileageFrom}
        mileageTo={mileageTo}
        onBrandChange={setBrand}
        onPriceChange={setPrice}
        onMileageFromChange={setMileageFrom}
        onMileageToChange={setMileageTo}
        onSearch={handleSearch}
      />

      <div style={{ marginTop: "64px" }}>
        {loading && page === 1 ? (
          <p>Загрузка...</p>
        ) : (
          <CarsList
            cars={cars}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        )}
      </div>

      {hasMore && (
        <LoadMoreButton loading={loading} onClick={handleLoadMore} />
      )}
    </main>
  );
}
