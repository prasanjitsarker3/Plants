import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="w-full container mx-auto py-12 md:px-0 px-8">
      <h1 className=" font-semibold text-3xl primaryColor vigaRegular py-5">
        Get In Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-100 p-8">
        <div className="">
          <Image src={"/contactBanner.png"} alt="" width={500} height={200} />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="w-full  rounded-md py-3 px-4 focus:outline-none focus:none focus:ring-primaryColor"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full  rounded-md py-3 px-4 focus:outline-none focus:none focus:ring-primaryColor"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="number"
                className="w-full  rounded-md py-3 px-4 focus:outline-none focus:none focus:ring-primaryColor"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows={3}
                className="w-full  rounded-md py-3 px-4 focus:outline-none focus:none focus:ring-primaryColor"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="primaryColorBg text-white py-2 w-full px-6 rounded-md hover:bg-primaryColor-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
