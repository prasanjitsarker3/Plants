import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../Redux/Slice/drawerSlice";
import { useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";

const ShoppingBag = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div
      className="primaryColorBg flex flex-col justify-center items-center p-2 md:p-3 2xl:p-6 text-white fixed top-1/2 right-0 transform -translate-y-1/2 rounded-l-xl z-10 cursor-pointer"
      onClick={handleToggle}
    >
      <FiShoppingBag size={24} />
      <h1>Your Bag</h1>
      <h1>{cartItems.length || 0}</h1>
    </div>
  );
};

export default ShoppingBag;
