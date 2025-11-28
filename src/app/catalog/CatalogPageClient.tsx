"use client";

import { useEffect } from "react";

import Filters from "@/components/catalog/Filters/Filters";
import CarsList from "@/components/catalog/CarsList/CarsList";
import LoadMoreButton from "@/components/ui/LoadMoreButton/LoadMoreButton";
import Loader from "@/components/ui/Loader/Loader";

import { useCarsStore } from "@/store/useCarsStore";

export default function CatalogPageClient() {
  const {
    cars,
    loading,
    hasMore,

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

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  const showInitialLoader = loading && cars.length === 0;

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

      <div style={{ marginTop: 64 }}>
        {showInitialLoader ? (
          <Loader />
        ) : (
          <CarsList cars={cars} onLoadMore={loadMore} hasMore={hasMore} />
        )}
      </div>

      {hasMore && !showInitialLoader && (
        <LoadMoreButton loading={loading} onClick={loadMore} />
      )}
    </main>
  );
}
