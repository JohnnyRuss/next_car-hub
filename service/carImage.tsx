import { RapidCarT } from "@/types/rapidCars";

export const generateCarImageURL = (car: RapidCarT, angle?: string): string => {
  try {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", year.toString());
    angle && url.searchParams.append("angle", angle);

    return url.toString();
  } catch (error) {
    throw error;
  }
};
