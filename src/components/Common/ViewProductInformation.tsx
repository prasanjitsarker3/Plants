"use client";
import { Rating, Star } from "@smastrom/react-rating";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { TiShoppingCart } from "react-icons/ti";
import { FiShoppingBag } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { toast } from "sonner";
import { addToCart } from "../Redux/Slice/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

export const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFCF11",
  inactiveFillColor: "#E5E5E5",
};

const ViewProductInformation = ({ productData }: { productData: any }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleBuyNow = async () => {
    if (!selectedSize) {
      toast.warning("Please select a size.");
      return;
    }

    const orderData = [
      {
        name: productData?.name,
        price: productData?.price,
        selectedSize,
        quantity,
      },
    ];

    console.log("Order Data Clicked", orderData);
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
    );
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: 1, price: 2500 }),
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

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.warning("Please select a size.");
      return;
    }
    const addToCartData = {
      id: productData?.id,
      name: productData?.name,
      price: productData?.price,
      photo: productData?.photo[0]?.img,
      allSizes: productData?.size,
      selectedSize,
      quantity,
    };

    const isItemInCart = cartItems.some(
      (item) =>
        item.id === addToCartData.id &&
        item.selectedSize === addToCartData.selectedSize
    );

    if (isItemInCart) {
      toast.warning("Item is already in the cart.");
    } else {
      dispatch(addToCart(addToCartData));
      toast.success("Item added to cart successfully!");
    }
  };

  return (
    <div>
      <div className=" space-y-2  md:space-y-3 2xl:space-y-5">
        <h1 className=" px-8 py-2 rounded-md bg-[#028355] text-white inline-block">
          New Arrival
        </h1>
        <h1 className=" font-medium text-2xl text-slate-900">
          {productData?.name || "Fiddle Leaf Fig"}
        </h1>
        <h1 className=" font-semibold vigaRegular text-2xl">
          USED : $ {productData?.price || "0"}
        </h1>
        <h2 className="flex items-center gap-12 font-semibold text-lg text-slate-800">
          <span>
            Plants Available:{" "}
            <span className="text-[#028355]">{productData?.totalProduct}</span>
          </span>
          <span>
            Sold: <span className="text-[#028355]">{productData?.sold}</span>
          </span>
        </h2>

        <div className=" flex items-center gap-2 text-lg">
          <div className=" flex items-center gap-1">
            <Rating
              style={{ maxWidth: 120 }}
              value={4}
              readOnly
              itemStyles={customStyles} // Pass custom styles
            />
            <h1>(4.0)</h1>
          </div>
          <h1 className=" primaryColor">121 reviews</h1>
        </div>
        <div>
          <h1 className=" text-lg text-slate-800">
            {productData?.description}
          </h1>
        </div>

        <div className=" border border-b border-dashed w-full"></div>
        <div className=" grid grid-cols-12">
          <div className=" md:col-span-6 col-span-12 ">
            <h1 className="font-medium text-gray-900 mb-2 text-lg">
              Available Sizes
            </h1>
            <div className="flex space-x-4">
              {productData?.size.map((size: any) => (
                <div
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`h-10 w-10 flex items-center justify-center rounded-md cursor-pointer  ${
                    selectedSize === size
                      ? "border border-[#028355] bg-[#028355] text-white"
                      : "bg-[#e6f3ee]"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h1 className="font-medium text-gray-900 text-lg mb-2">Quantity</h1>
            <div className=" w-44 flex justify-center items-center space-x-8 bg-[#e6f3ee]  rounded-full px-4 py-2 ">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className=" flex items-center justify-center"
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <span className="text-lg font-medium text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex items-center justify-center "
              >
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        <div className=" border border-b border-dashed w-full"></div>

        <div className=" flex flex-col md:flex-row items-center gap-4 md:gap-12 md:pt-0 pt-4">
          <button
            onClick={handleBuyNow}
            className="w-full bg-[#028355] text-white text-center text-lg py-2 rounded-full flex justify-center items-center gap-2"
          >
            Buy Now <TiShoppingCart className=" h-5 w-5" />
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full border border-[#028355] text-[#028355] text-center text-lg rounded-full py-2 flex justify-center items-center gap-2"
          >
            Add To Cart <FiShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProductInformation;
