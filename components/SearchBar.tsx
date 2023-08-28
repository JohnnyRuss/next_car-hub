"use client";

import React, { useState } from "react";
import { SearchManufacturer, SearchButton } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const router = useRouter();

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) searchParams.set("model", model);
    else searchParams.delete("model");

    if (manufacturer) searchParams.set("manufacturer", manufacturer);
    else searchParams.delete("manufacturer");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
  }

  function onSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (manufacturer === "" && model === "")
      return alert("Please fill in the search bar");

    const pathname = updateSearchParams(model, manufacturer);

    router.push(pathname);
  }

  return (
    <form className="searchbar" onSubmit={onSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton classes="sm:hidden bg-green-500" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />

        <input
          type="text"
          name="model"
          value={model}
          placeholder="Tiguan"
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />

        <SearchButton classes="sm:hidden" />
      </div>

      <SearchButton classes="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
