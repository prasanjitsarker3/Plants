"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProductCollection = () => {
  const collectionData = [
    {
      id: 1,
      title: "Man Collection",
      img: "/Photo/ManFashionfa.png",
    },
    {
      id: 2,
      title: "Woman Collection",
      img: "/Photo/WoamFashionFas.png",
    },
    {
      id: 3,
      title: "Winter Collection",
      img: "/Photo/WintrerFas.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full container mx-auto md:px-0 px-4 py-16 sm:py-24">
      <div className="grid grid-cols-12 items-center gap-4 sm:gap-12 md:gap-20">
        {/* Image and Title */}
        <div className="relative md:col-span-6 col-span-12">
          <div className="relative w-full flex h-[18rem] md:h-[24rem]  justify-center items-center secondaryColor"></div>
          <div className="absolute -top-12 md:-top-20 w-full h-[21rem] md:h-[29rem]  flex justify-center items-center">
            <Image
              src={collectionData[currentIndex].img}
              alt={collectionData[currentIndex].title}
              width={400}
              height={400}
              className="h-full object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-6 col-span-12 flex flex-col justify-center space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold vigaRegular text-slate-900">
            {collectionData[currentIndex].title}
          </h1>
          <div className="flex sm:items-center justify-center md:justify-start">
            <button className="primaryColorBg text-white px-12  py-3 rounded-full">
              Shop Now
            </button>
            <div className="h-12 w-12 flex justify-center items-center primaryColorBg text-white rounded-full">
              <MoveUpRight />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {collectionData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`py-1 rounded ${
              currentIndex === index
                ? "bg-[#8f71e1] px-4 text-white"
                : "bg-gray-300 px-2 text-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
