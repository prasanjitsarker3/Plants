"use client";
import ProductCart from "@/components/Common/ProductCart";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import { useGetProductQuery } from "@/components/Redux/Api/productApi";
import { productData } from "@/components/UtlitiFunction/ProductData";
import { Pagination } from "@nextui-org/react";
import { Search } from "lucide-react";
import React, { useState } from "react";

interface Params {
  categoryId: string;
}

const CategoryProductShow = ({ params }: { params: Params }) => {
  const { categoryId } = params;
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const query = {
    categoryId,
    searchTerm,
  };

  const { data, isLoading, isError } = useGetProductQuery(query);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError || !data?.data?.data) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }
  const productDataNow = data?.data?.data || [];
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  console.log("Data", productDataNow);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className=" w-full container mx-auto py-24">
      <div className=" flex items-center gap-6">
        <h1 className=" py-2 px-6 rounded-full bg-gray-100 inline-block text-lg font-medium text-slate-800">
          <span className=" primaryColor">
            {productDataNow[0]?.category?.name}
          </span>{" "}
          Category Plants
        </h1>
        <div className=" md:w-80 w-full relative">
          <input
            type="text"
            placeholder="Searching..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-200 py-2 px-4 pl-12 rounded-full focus:outline-none w-full"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Search className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className=" w-full container mx-auto">
        {productDataNow.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-500">
              Products are not available.
            </h2>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
              {productDataNow.map((item: any) => (
                <ProductCart item={item} key={item.id} discount={true} />
              ))}
            </div>
            <div className=" w-full flex justify-center my-8">
              <Pagination
                size="lg"
                showControls
                total={countPage}
                page={page}
                onChange={handlePageChange}
                classNames={{
                  item: "text-gray-800 bg-gray-100 hover:bg-gray-200",
                  cursor: "bg-[#028355] text-white",
                  prev: "hover:bg-[#028355] text-gray-800",
                  next: "hover:bg-gray-200 text-gray-800",
                }}
              />
            </div>
          </>
        )}

        <DiscountBanner />
      </div>
    </div>
  );
};

export default CategoryProductShow;
