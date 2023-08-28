"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components";

interface HeroT {}

const Hero: React.FC<HeroT> = () => {
  function onScroll() {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car &mdash; quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          onClick={onScroll}
        />
      </div>

      <div className="hero__image-container">
        <figure className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </figure>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
