"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Router, Search, ShoppingBag, X } from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useUserInfo } from "../Authentication/userInfo";
import { logoutUser } from "../Authentication/logoutUser";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logOut } from "../Redux/Slice/authSlice";
import { IoIosArrowDown } from "react-icons/io";
import { useGetCategoryQuery } from "../Redux/Api/categoryApi";
import { RootState } from "../Redux/store";
import { toggleDrawer } from "../Redux/Slice/drawerSlice";
import UserProfileDropDown from "./UserNavbarDropdown";

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const user = useUserInfo();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`
      ${
        pathname === "/" || pathname === "/about"
          ? scrolling
            ? "primaryColorBg fixed top-0 pt-0 mt-0 dark:bg-slate-800 w-full z-40"
            : "w-full z-40 fixed bg-none"
          : scrolling
          ? "primaryColorBg fixed top-0 mt-0 pt-0 dark:bg-slate-800 w-full z-40"
          : "w-full z-40 fixed primaryColorBg top-0 pt-0 mt-0"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full container mx-auto md:px-0 px-0">
        <div className="w-full flex justify-between items-center md:px-0 px-2 text-white py-3">
          {/* First Div */}
          <div className="flex-1 flex justify-start items-center md:pl-0 pl-3">
            <div className="flex items-center gap-3">
              <Image
                src={"/leaf.png"}
                alt=""
                width={60}
                height={60}
                className=" md:h-12 md:w-12 h-6 w-6"
              />
              <Link
                href={"/"}
                className="text-lg md:text-3xl font-bold vigaRegular"
              >
                Bloomify
              </Link>
            </div>
          </div>

          {/* Second Div */}
          <div className=" hidden md:block flex-1 flex justify-center items-center">
            <div className="flex justify-center items-center text-center gap-3">
              <Link href={"/"} className="text-lg text-white cursor-pointer">
                Home
              </Link>

              <Link
                href={"/product"}
                className="text-lg text-white cursor-pointer"
              >
                Product
              </Link>
              <Link
                href={"/about"}
                className="text-lg text-white cursor-pointer"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Third Div */}
          <div className="flex-1 flex items-center gap-5 justify-end mf:pr-0 pr-3">
            <div className="flex items-center rounded-full px-2 md:px-6 md:py-2 py-1  text-white border border-white">
              <button className="">
                <Search className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent placeholder:text-white outline-none w-32 md:w-48 px-2 text-sm "
              />
            </div>

            <div
              onClick={handleToggle}
              className="hidden md:block relative flex items-center cursor-pointer"
            >
              <ShoppingBag className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-2 bg-gray-600 text-white text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length || 0}
              </span>
            </div>

            <div className=" hidden md:block">
              <Link href={"/login"}>
                <button className=" py-1 px-2 md:px-6 rounded-full border border-white">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 h-[100vh] bg-white shadow-lg z-40 w-60 left-0 md:hidden">
          <div className="  w-full p-3 ">
            <div className="bg-[#028355] flex justify-between items-center p-1 text-white">
              <div className="flex items-center gap-3 ">
                <Image
                  src={"/leaf.png"}
                  alt=""
                  width={60}
                  height={60}
                  className=" md:h-12 md:w-12 h-8 w-8 bg-[#028355]"
                />
                <Link
                  href={"/"}
                  className="text-xl md:text-3xl font-bold vigaRegular"
                >
                  Bloomify
                </Link>
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className="bg-[#028355] text-white cursor-pointer"
              >
                <X />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-1">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-[#028355] hover:text-white"
            >
              Home
            </Link>

            <Link
              href={"/product"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-[#028355] hover:text-white"
            >
              Product
            </Link>
            <Link
              href={"/about"}
              onClick={() => setIsOpen(false)}
              className="text-lg text-black cursor-pointer py-1 px-1 hover:bg-[#028355] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
