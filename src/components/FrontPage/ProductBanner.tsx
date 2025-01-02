"use client";
import Image from "next/image";
import React from "react";
import { useGetCategoryQuery } from "../Redux/Api/categoryApi";
import Link from "next/link";
export const plantData = [
  {
    id: 1,
    name: "Indoor Plants",
  },
  {
    id: 2,
    name: "Outdoor Plants",
  },
  {
    id: 3,
    name: "Office Plants",
  },
  {
    id: 4,
    name: "Flowering Plants",
  },
  {
    id: 5,
    name: "Succulents & Cacti",
  },
  {
    id: 6,
    name: "Plant Care Essentials",
  },
];

const ProductBanner = () => {
  const { data, isLoading } = useGetCategoryQuery({});
  if (isLoading) {
    return <h1 className=" text-center pt-12 ">Loading</h1>;
  }
  const categoryData = data?.data?.data || [];
  return (
    <div className="w-full container mx-auto md:px-0 px-4 py-12">
      <div className=" grid grid-cols-2 md:grid-cols-6 gap-3 pt-4 pb-8">
        {categoryData?.map((data: any) => (
          <Link href={`/category/${data.id}`} key={data.id}>
            <div className=" bg-gray-100 py-3 px-4 hover:bg-[#028355] hover:text-white text-slate-800 transition duration-300 ease-in-out cursor-pointer">
              <h1 className=" text-center text-base font-medium">
                {data.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-8">
        {/* First Banner */}
        <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg p-6 flex items-center justify-between">
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              New Arrivals
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold primaryColor mb-4">
              House Plants
            </h2>
            <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/PDB2.png"
              alt="House Plants"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Second Banner */}
        <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg p-6 flex items-center justify-between">
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Fresh Stock
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold primaryColor mb-4">
              Greenery Sale
            </h2>
            <button className="primaryColorBg text-white py-2 px-6 rounded-md hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/PDB1.png"
              alt="Greenery Sale"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
