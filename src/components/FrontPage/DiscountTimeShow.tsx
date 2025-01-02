/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const DiscountTimeShow = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date for the discount deadline
  const discountDeadline = new Date("2025-02-26T23:59:59").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = discountDeadline - now;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [discountDeadline]);

  return (
    <div className="w-full container mx-auto py-12 md:px-0 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-100">
        {/* Left Section */}

        <div className=" px-4 md:px-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold primaryColor">
              Don't Miss The Deal!
            </h1>
            <h2 className="text-sm md:mr-0 mr-12 md:text-xl font-semibold text-slate-600">
              Don't miss out on our exclusive offers! Special discounts on all
              your favorite plants and gardening essentials are ending soon—shop
              now to make your space greener!
            </h2>

            <div className="flex md:space-x-4 space-x-2 text-sm md:text-xl font-semibold text-gray-600">
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-base font-bold ">
                  {timeLeft.days}
                </span>{" "}
                Days
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-base font-bold text-primaryColor">
                  {timeLeft.hours}
                </span>{" "}
                Hours
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-base font-bold text-primaryColor">
                  {timeLeft.minutes}
                </span>{" "}
                Minutes
              </div>
              <div className=" bg-[#028355] text-white text-center rounded-lg md:p-3 p-1 overflow-hidden">
                <span className="md:text-4xl text-base font-bold text-primaryColor">
                  {timeLeft.seconds}
                </span>{" "}
                Seconds
              </div>
            </div>
            <button className="border border-[#028355] hover:bg-[#028355] hover:text-white transition duration-300 ease-in-out primaryColor  py-2 px-12 rounded-full">
              Get The Deal
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" flex justify-center">
          <Image
            src="/TimePhoto.png"
            alt="Plant Discount"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountTimeShow;
