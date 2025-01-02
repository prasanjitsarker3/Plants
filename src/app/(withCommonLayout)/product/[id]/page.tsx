"use client";
import { ArrowLeft, ArrowRight, Link, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewProductInformation, {
  customStyles,
} from "@/components/Common/ViewProductInformation";
import { Rating } from "@smastrom/react-rating";
import { Progress } from "@nextui-org/react";
import RelatedProduct from "@/components/FrontPage/ReleventProduct";
import {
  productData,
  productInformationData,
} from "@/components/UtlitiFunction/ProductData";
import ShoppingBag from "@/components/Common/ShoppingBag";

interface Params {
  id: string;
}
const ProductView = ({ params }: { params: Params }) => {
  const { id } = params;
  const [currentProductData, setCurrentProductData] = useState<any>(null);

  useEffect(() => {
    const data = productData.find((item) => item.id === parseInt(id));
    setCurrentProductData(data);
  }, [id]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentProductData?.photo?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentProductData.photo.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (currentProductData?.photo?.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? currentProductData.photo.length - 1 : prevIndex - 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const [activeTab, setActiveTab] = useState(2);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="bg-[#F4F8FF]">
      <div className="w-full container mx-auto  md:px-0 px-4 ">
        <ShoppingBag />

        <h1 className="font-medium text-lg text-slate-900 py-3 pt-20">
          Feature Product / <span className="primaryColor">New Arrival</span>
        </h1>

        <div className="grid grid-cols-12 gap-6 md:gap-12 2xl:py-8 md:py-4 py-3">
          {/* Image & Thumbnail Section */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-center bg-[#e6f3ee] py-6 md:py-8">
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 md:h-10 md:w-10 h-8 w-8 z-10 flex justify-center items-center border border-[#028355] hover:bg-[#028355] hover:text-white text-[#028355] rounded-full"
              >
                <ArrowLeft />
              </button>

              {/* Product Image */}
              <div className="h-64 md:h-80 2xl:h-96 w-full relative flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProductData?.photo[currentImageIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-auto h-full flex justify-center items-center"
                  >
                    <Image
                      src={currentProductData?.photo[currentImageIndex].img}
                      alt="Product"
                      width={500}
                      height={500}
                      className="rounded-lg h-full w-auto max-h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 md:h-10  md:w-10 h-8 w-8 z-10 flex justify-center items-center border border-[#028355] hover:bg-[#028355] hover:text-white text-[#028355] rounded-full"
              >
                <ArrowRight />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
              {currentProductData?.photo.map((item: any, index: any) => (
                <div
                  key={item.id}
                  onClick={() => handleThumbnailClick(index)}
                  className={`cursor-pointer transition-all ${
                    index === currentImageIndex
                      ? "border-2 border-[#028355] bg-[#ece9fe] rounded-lg"
                      : "border-2 border-transparent bg-[#ece9fe] rounded-lg"
                  }`}
                >
                  <Image
                    src={item.img}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-lg h-16 w-16"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="col-span-12 md:col-span-6 px-4 md:px-6">
            <ViewProductInformation productData={currentProductData} />
          </div>
        </div>

        <div className="w-full">
          {/* Tab Navigation */}
          <div className="flex items-center text-lg text-slate-700 space-x-2 md:space-x-8  pb-2">
            {productInformationData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-[#028355] font-semibold"
                    : "text-slate-600 hover:text-[#028355]"
                } pb-1`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {productInformationData.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id}>
                    {tab.id === 1 && <p>{tab.details}</p>}
                    {tab.id === 2 && (
                      <div className=" grid grid-cols-12 gap6 md:gap-12">
                        <div className=" col-span-12 md:col-span-8 ">
                          <div className=" grid grid-cols-1 gap-4">
                            {tab?.users?.map((user, index) => (
                              <div key={user.id} className=" space-y-3">
                                <div className=" flex items-center gap-2">
                                  <Image
                                    src={
                                      "https://img.freepik.com/free-photo/portrait-happy-girl-standing-with-arm-hips_171337-3604.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                                    }
                                    alt=""
                                    width={100}
                                    height={100}
                                    className=" h-12 w-12 rounded-full"
                                  />
                                  <div>
                                    <h1>{user.name}</h1>
                                    <Rating
                                      style={{ maxWidth: 120 }}
                                      value={4}
                                      readOnly
                                      itemStyles={customStyles}
                                    />
                                  </div>
                                </div>
                                <h1>Very Much !!</h1>
                                <div className=" flex items-center gap-3">
                                  <ThumbsUp size={20} />
                                  {user.like}
                                </div>
                                <div
                                  className={`border border-b border-dashed border-gray-200 ${
                                    index === tab?.users?.length - 1
                                      ? "hidden"
                                      : ""
                                  }`}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className=" col-span-12 md:col-span-4 space-y-3">
                          <h1 className=" font-medium vigaRegular text-slate-800 text-xl ">
                            Product Review{" "}
                            <span className=" primaryColor">121 reviews</span>
                          </h1>
                          <div className=" flex items-center justify-between ">
                            <Rating
                              style={{ maxWidth: 180 }}
                              value={4}
                              readOnly
                              itemStyles={customStyles}
                            />
                            <h1>(4.0)</h1>
                          </div>
                          <div className=" border border-b border-dashed border-gray-200"></div>
                          <div className=" grid grid-cols-1 gap-3">
                            {tab?.userFeedBack?.map((feed, index) => (
                              <div
                                key={index}
                                className=" flex items-center gap-2"
                              >
                                <h1>{feed.id}</h1>
                                <Progress
                                  aria-label="Loading..."
                                  value={feed.value}
                                  classNames={{
                                    indicator: "bg-[#FFCF11]",
                                  }}
                                />
                                <h1>{feed.value}</h1>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {tab.id === 3 && <p>{tab.details}</p>}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div>
        <RelatedProduct />
      </div>
    </div>
  );
};

export default ProductView;
