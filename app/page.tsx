import React from "react";
import { Hero, Catalog, ShowMore } from "@/components";

import { getCars } from "@/service/rapidCars";

interface HomeT {
  searchParams: {
    model?: string;
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
  };
}

const Home: React.FC<HomeT> = async ({
  searchParams: { model, manufacturer, fuel, year, limit },
}) => {
  const data = await getCars({
    model: model || "",
    manufacturer: manufacturer || "",
    fuel: fuel || "",
    year: year || 2022,
  });

  return (
    <>
      <Hero />
      <Catalog data={data} />
      <ShowMore
        page={(limit || 12) / 12}
        isNext={(limit || 12) > (data?.length || 0)}
      />
    </>
  );
};

export default Home;
