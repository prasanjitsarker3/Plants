import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { closeDrawer } from "../Redux/Slice/drawerSlice";
import { useAppSelector } from "../Redux/hooks";
import Image from "next/image";
import { removeFromCart } from "../Redux/Slice/cartSlice";
import { Trash } from "lucide-react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

const Drawer = () => {
  const isDrawerOpen = useAppSelector(
    (state: RootState) => state.drawer.isOpen
  );
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeDrawer());
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleBuyNow = async () => {
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: 1, price: 250 }),
    });

    if (!response.ok) {
      console.error("Failed to create checkout session");
      return;
    }

    const { id } = await response.json();

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        console.error("Stripe Checkout error:", error.message);
      }
    }
  };
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-[100vh] bg-white shadow-lg z-40 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-72 2xl:w-80`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-2">
            <h1 className="text-lg font-semibold">Your Cart</h1>
            <button className=" text-red-600" onClick={handleClose}>
              ✖
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto mt-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className=" relative border-b py-4 flex gap-5">
                  <Image
                    src={
                      item.photo ||
                      "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                    }
                    alt="i"
                    width={100}
                    height={100}
                    className=" h-14 w-14"
                  />
                  <div className=" w-full">
                    <div className=" flex justify-between items-center">
                      <h2 className="font-medium primaryColor">{item.name}</h2>
                      <p className=" font-medium">${item.price}</p>
                    </div>
                    <div className=" flex justify-between items-center">
                      <h2 className="font-medium">Size: {item.selectedSize}</h2>
                      <h2 className="font-medium ">Qty: {item.quantity}</h2>
                    </div>
                  </div>
                  <button
                    className=" absolute top-0 right-0 text-red-500 pb-1 "
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    ✖
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Checkout Button */}
          {cartItems.length > 0 ? (
            <>
              {/* <Link href={"/checkout"}> */}
              <button
                onClick={handleBuyNow}
                className="bg-[#028355] text-white py-2 px-4 rounded-full w-full"
              >
                Checkout
              </button>
              {/* </Link> */}
            </>
          ) : (
            <>
              <button className="bg-[#028355] text-white py-2 px-4 rounded-full w-full">
                Add Some Plants
              </button>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={handleClose}
        ></div>
      )}
    </>
  );
};

export default Drawer;
