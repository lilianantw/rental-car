"use client";

import Filters from "@/components/catalog/Filters/Filters";
import CarsList from "@/components/catalog/CarsList/CarsList";
import LoadMoreButton from "@/components/ui/LoadMoreButton/LoadMoreButton";

import { useEffect } from "react";
import { useCarsStore } from "@/store/useCarsStore";

export default function CatalogPage() {
  const {
    cars,
    loading,
    hasMore,

    // filters
    brand,
    price,
    mileageFrom,
    mileageTo,

    setBrand,
    setPrice,
    setMileageFrom,
    setMileageTo,

    loadCars,
    searchWithFilters,
    loadMore,
  } = useCarsStore();

  // загрузка первой страницы
  useEffect(() => {
    loadCars();
  }, []);

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
        onSearch={searchWithFilters}
      />

      <div style={{ marginTop: "64px" }}>
        {loading && cars.length === 0 ? (
          <p>Загрузка...</p>
        ) : (
          <CarsList cars={cars} onLoadMore={loadMore} hasMore={hasMore} />
        )}
      </div>

      {hasMore && (
        <LoadMoreButton loading={loading} onClick={loadMore} />
      )}
    </main>
  );
}
