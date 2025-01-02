/* eslint-disable react/no-unescaped-entities */
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-green-100 to-green-300">
      {/* Decorative Image */}
      <div className="flex justify-center mb-6">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/2303/2303716.png" // Replace with your plant illustration URL
          alt="Plant Illustration"
          width={100}
          height={100}
          className="w-40 h-auto"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl text-green-700 font-bold">
        Oops! Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl text-green-600 mt-4">
        It seems you've taken a wrong turn in the garden. Don't worry, let's get
        you back home.
      </p>

      {/* Back Home Button */}
      <Link href="/">
        <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
