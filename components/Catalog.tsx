import React from "react";
import { SearchBar, FilterField, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants/constants";

import { RapidCarT } from "@/types/rapidCars";
interface CatalogT {
  data: RapidCarT[] | undefined;
}

const Catalog: React.FC<CatalogT> = ({ data }) => {
  const dataIsEmpty = !Array.isArray(data) || data.length < 1 || !data;

  return (
    <div className="mt-12 padding-x padding-y max-width" id="catalog">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p className="">Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />

        <div className="home__filter-container">
          <FilterField title="fuel" options={fuels} />
          <FilterField title="year" options={yearsOfProduction} />
        </div>
      </div>

      {dataIsEmpty ? (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      ) : (
        <section>
          <div className="home__cars-wrapper">
            {data.map((car, i) => (
              <CarCard key={`${car.model}--${i}`} car={car} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Catalog;
