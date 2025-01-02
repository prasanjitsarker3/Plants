import { Avatar } from "@nextui-org/react";
import React, { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useRouter } from "next/navigation";
import { PowerOff, User } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { logoutUser } from "../Authentication/logoutUser";
import { logOut } from "../Redux/Slice/authSlice";
import { useUserInfo } from "../Authentication/userInfo";

const UserProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useUserInfo();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    //@ts-ignore
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOutUser = () => {
    logoutUser(router);
    dispatch(logOut());
    toast.success("Logged Out Successfully");
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="rounded-full border-2 border-white mt-1 p-0.5  cursor-pointer"
      >
        <User />
      </div>

      {isOpen && (
        <ul
          role="menu"
          className="absolute -left-40 mt-3 z-10 min-w-[180px] overflow-auto rounded-lg bg-white p-1.5 focus:outline-none"
        >
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm 2xl:text-base items-center rounded-md px-3 py-2 transition-all hover:bg-primary focus:bg-primary active:bg-primary hover:text-white"
          >
            {user?.name || "N/A"}
          </li>
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm 2xl:text-base items-center rounded-md px-3 py-2 transition-all hover:bg-primary focus:bg-primary active:bg-primary hover:text-white"
          >
            <Link href={"/dashboard/admin"}>Dashboard</Link>
          </li>
          <li
            onClick={handleLogOutUser}
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-base items-center rounded-md px-3 py-2 transition-all"
          >
            <h1 className="w-full text-base rounded-full flex justify-center  items-center gap-2 bg-red-600 p-1 text-white">
              Logout <PowerOff size={16} />
            </h1>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserProfileDropDown;
