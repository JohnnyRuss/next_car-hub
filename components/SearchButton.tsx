import Image from "next/image";
import React from "react";

interface SearchButtonT {
  classes?: string;
}

const SearchButton: React.FC<SearchButtonT> = ({ classes }) => {
  return (
    <button type="submit" className={`-ml-3 z-20 ${classes || ""}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
