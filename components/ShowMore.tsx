"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils/updateSearchParams";

import { Button } from "@/components";

interface ShowMoreT {
  page: number;
  isNext: boolean;
}

const ShowMore: React.FC<ShowMoreT> = ({ isNext, page }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (page + 1) * 12;
    router.push(updateSearchParams("limit", newLimit.toString()));
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
