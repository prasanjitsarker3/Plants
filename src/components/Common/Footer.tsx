"use client";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.div
      className="relative bg-slate-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-10 flex justify-center items-center overflow-hidden">
        <div
          className="w-full h-full bg-gradient-radial from-transparent via-[#028355] to-transparent opacity-100 blur-lg"
          style={{
            background: `radial-gradient(circle, rgba(2,131,85,0) 0%, rgba(2,131,85,0.8) 50%, rgba(2,131,85,0) 100%)`,
          }}
        />
      </div>

      {/* Glass Effect Container */}
      <div className="relative z-20 rounded-xl p-6 md:p-10 backdrop-blur-xl bg-slate-950/70">
        <div className="grid grid-cols-12 gap-8 py-8 text-white">
          {/* Left Section */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={"/leaf.png"}
                alt=""
                width={60}
                height={60}
                className=" md:h-12 md:w-12 h-8 w-8"
              />
              <Link
                href={"/"}
                className="text-xl md:text-3xl font-bold vigaRegular"
              >
                Bloomify
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div className="col-span-12 md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">About Us</h1>
            <p className="text-sm md:text-base">Contact Us</p>
          </div>

          {/* Privacy Policy */}
          <div className="col-span-12 md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">Privacy Policy</h1>
            <p className="text-sm md:text-base">Terms & Conditions</p>
          </div>

          {/* Social Links */}
          <div className="col-span-12 md:col-span-2 space-y-2">
            <h1 className="text-lg font-semibold">Social Links</h1>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
