"use client";
import { useUserInfo } from "@/components/Authentication/userInfo";
import { useOrderByCashMutation } from "@/components/Redux/Api/orderApi";
import { useAppDispatch, useAppSelector } from "@/components/Redux/hooks";
import { clearCart } from "@/components/Redux/Slice/cartSlice";
import { RootState } from "@/components/Redux/store";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CreditCard, DollarSign, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  contactNumber: number;
  address: string;
}

const CheckoutPage = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const accessToken = useAppSelector(
    (state: RootState) => state.auth?.accessToken
  );
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createCashOnOrder, { isLoading }] = useOrderByCashMutation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const user = useUserInfo();

  // State for managing selected size and quantity
  const [cartState, setCartState] = useState(
    cartItems.map((item) => ({
      ...item,
      selectedSize: item.selectedSize || item.allSizes[0], // Default size
      quantity: item.quantity || 1, // Default quantity
    }))
  );

  const totalPrice = cartState
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // Handle size selection
  const handleSizeChange = (index: number, size: string) => {
    setCartState((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, selectedSize: size } : item
      )
    );
  };

  // Handle quantity increment
  const handleIncreaseQuantity = (index: number) => {
    setCartState((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrement
  const handleDecreaseQuantity = (index: number) => {
    setCartState((prevState) =>
      prevState.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckoutOrder = async () => {
    if (!accessToken) {
      router.push(`/login?redirect=${pathname}`);
    } else {
      setIsOpenModal(true);
    }
    // Construct the orderData array from the cartState
    // const orderData = cartState.map((item) => ({
    //   productId: item.id, // Replace 'id' with the actual key representing the product ID in your cart items
    //   price: item.price,
    //   quantity: item.quantity,
    //   size: item.selectedSize,
    // }));

    try {
      console.log("Order Data:");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleOnlinePayment = async (data: FormData) => {
    console.log("Online Payment Data");
  };
  const handleCashPayment = async (data: FormData) => {
    const toastId = toast.loading("Processing...");

    const orderData = {
      name: data?.name,
      email: data?.email,
      contactNumber: data?.contactNumber,
      address: data?.address,
      userId: user?.id,
      totalPrice: parseInt(totalPrice.toString(), 10),
      orderItems: cartState.map((item) => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
        size: item.selectedSize,
      })),
    };
    try {
      const res = await createCashOnOrder(orderData).unwrap();
      console.log("Order response", res);
      if (res?.statusCode === 201) {
        toast.success(res?.message, { id: toastId, duration: 1000 });
        setIsOpenModal(false);
        dispatch(clearCart());
        reset();
      } else {
        toast.error(res?.message, { id: toastId, duration: 1000 });
        setIsOpenModal(false);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="py-16">
      <div className="w-full container mx-auto lg:px-0 px-4 pt-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7">
            {/* Product Information */}
            {cartState.map((item, index) => (
              <div
                key={index}
                className="relative border-b py-4 flex gap-5 items-center"
              >
                <Image
                  src={
                    item.photo ||
                    "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt="Product"
                  width={100}
                  height={100}
                  className="h-20 w-20 object-cover rounded-md"
                />
                <div className="w-full pr-5">
                  <div className="flex justify-between items-center">
                    <h2 className=" text-lg font-medium primaryColor">
                      {item.name}
                    </h2>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  {/* Size Selection */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 mt-2">
                      {item.allSizes.map((size) => (
                        <div
                          key={size}
                          onClick={() => handleSizeChange(index, size)}
                          className={`h-8 w-8 flex items-center justify-center rounded-md cursor-pointer ${
                            item.selectedSize === size
                              ? "border border-[#028355] bg-[#028355] text-white"
                              : "bg-[#e6f3ee] text-gray-800"
                          }`}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                    {/* Quantity Controls */}
                    <div className="w-44 flex justify-between items-center mt-4 bg-[#e6f3ee] rounded-full px-4 py-1">
                      <button
                        onClick={() => handleDecreaseQuantity(index)}
                        className="flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4 text-gray-700" />
                      </button>
                      <span className="text-lg font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(index)}
                        className="flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className=" w-7 h-7 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 text-white flex items-center justify-center"
                    onClick={() => {
                      setCartState((prevState) =>
                        prevState.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-5 bg-gray-100 p-6">
            {/* Price Summary */}
            <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
            <ul className="space-y-2">
              {cartState.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>
                $
                {cartState
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckoutOrder}
              className="mt-4 w-full py-2 bg-[#028355] text-white rounded-md"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpenModal}
        onOpenChange={(isOpen) => setIsOpenModal(isOpen)}
        size="3xl"
      >
        <ModalContent>
          <ModalBody>
            <form className=" grid grid-cols-2 gap-4 p-4">
              <div>
                <label className="block text-left text-gray-700 font-normal">
                  Name
                </label>
                <input
                  defaultValue={user?.name}
                  {...register("name", { required: "Name is required" })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-left text-gray-700 font-normal">
                  Email
                </label>
                <input
                  defaultValue={user?.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-left text-gray-700 font-normal">
                  Contact Number
                </label>
                <input
                  type="number"
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    valueAsNumber: true,
                  })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter your contact number"
                />
                {errors.contactNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.contactNumber.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-left text-gray-700 font-normal">
                  Address
                </label>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter your address"
                ></textarea>
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>
            </form>
          </ModalBody>

          <ModalFooter className="w-full items-center space-x-4">
            <Button
              size="md"
              className=" primaryColorBg text-white font-bold w-full flex items-center justify-center gap-2"
              onClick={handleSubmit(handleCashPayment)}
            >
              <DollarSign size={16} /> Cash Payment
            </Button>
            <Button
              size="md"
              className=" primaryColorBg text-white font-bold w-full flex items-center justify-center gap-2"
              onClick={handleSubmit(handleOnlinePayment)}
            >
              <CreditCard size={16} /> Online Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
