"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button, CarDetails } from "@/components";

import { calcCarRent } from "@/utils/calcCarRent";
import { generateCarImageURL } from "@/service/carImage";

import { RapidCarT } from "@/types/rapidCars";
interface CarCardT {
  car: RapidCarT;
}

const CarCard: React.FC<CarCardT> = ({ car }) => {
  const carRent = calcCarRent(car.city_mpg, car.year);

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <figure className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageURL(car)}
          priority
          fill
          alt={`${car.make} - ${car.model}`}
          className="object-contain"
        />
      </figure>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/tire.svg"}
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{car.drive?.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/gas.svg"}
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
