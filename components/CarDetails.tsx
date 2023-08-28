"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { generateCarImageURL } from "@/service/carImage";

import { RapidCarT } from "@/types/rapidCars";
interface CarDetailsT {
  isOpen: boolean;
  onClose: () => void;
  car: RapidCarT;
}

const CarDetails: React.FC<CarDetailsT> = ({ car, isOpen, onClose }) => {
  return (
    <Transition as={Fragment} appear show={isOpen}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <figure className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={generateCarImageURL(car)}
                      priority
                      fill
                      alt={`${car.make} - ${car.model}`}
                      className="object-contain"
                    />
                  </figure>

                  <div className="flex gap-3">
                    <figure className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageURL(car, "29")}
                        priority
                        fill
                        alt={`${car.make} - ${car.model}`}
                        className="object-contain"
                      />
                    </figure>
                    <figure className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageURL(car, "33")}
                        priority
                        fill
                        alt={`${car.make} - ${car.model}`}
                        className="object-contain"
                      />
                    </figure>
                    <figure className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageURL(car, "13")}
                        priority
                        fill
                        alt={`${car.make} - ${car.model}`}
                        className="object-contain"
                      />
                    </figure>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold capitalize text-xl">
                    {car.make} {car.model}
                  </h2>

                  <ul className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value], i) => (
                      <li
                        key={`${car.make}-${car.model}__${i}`}
                        className="flex justify-between gap-5 w-full text-right"
                      >
                        <span className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </span>
                        <span className="text-black-100 font-semibold">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
