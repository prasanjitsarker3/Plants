import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { DollarSign, CreditCard } from "lucide-react";
import { useUserInfo } from "../Authentication/userInfo";
import { loadStripe } from "@stripe/stripe-js";
import { useOrderByStripeMutation } from "../Redux/Api/orderApi";

interface FormData {
  name: string;
  email: string;
  contactNumber: number;
  address: string;
}

const ProductOrderModal = ({
  isOpen,
  onClose,
  selectedSize,
  quantity,
  productData,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedSize: string | null;
  quantity: number;
  productData: any;
}) => {
  const [createOnlineOrder, { isLoading }] = useOrderByStripeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const user = useUserInfo();
  const totalPrice = Math.round(productData?.price * quantity);

  const handleCashPayment = async (data: FormData) => {
    const paymentData = {
      name: data.name,
      address: data.address,
      contact: data.contactNumber,
      note: "Cash",
      deliveryCharge: 60,
      totalPrice,
      productOrderData: [
        {
          productId: productData.id,
          size: selectedSize,
          quantity: quantity,
        },
      ],
    };

    console.log("Payment Data:", paymentData);
    // try {
    //   const res = await createOnlineOrder(paymentData);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleOnlinePayment = async (data: FormData) => {
    const paymentData = {
      name: data.name,
      address: data.address,
      contact: data.contactNumber,
      note: "Online",
      deliveryCharge: 60,
      totalPrice, // Ensure totalPrice is correctly passed here
      productOrderData: [
        {
          productId: productData.id,
          size: selectedSize,
          quantity: quantity,
        },
      ],
    };

    try {
      const res = await createOnlineOrder(paymentData);
      console.log("Online pay response:", res);
      const { sessionId } = res.data.data;
      console.log("Session ID:", sessionId);
      if (sessionId) {
        const stripe = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
        );
        console.log("Stripe:", stripe);
        if (stripe) {
          await stripe.redirectToCheckout({ sessionId });
        } else {
          console.error("Stripe failed to initialize.");
          alert(
            "An error occurred while processing the payment. Please try again."
          );
        }
      } else {
        console.error("Session ID not returned.");
        alert(
          "An error occurred while creating the payment session. Please try again."
        );
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="3xl">
      <ModalContent>
        <ModalBody>
          <div className="mt-5 space-y-3 bg-gray-50 rounded-lg">
            <h1 className="text-xl font-medium primaryColor px-4 ">
              Confirm Your Order
            </h1>
            <div className=" grid grid-cols-2 items-center w-full gap-4 bg-gray-50 ">
              <div className="flex-1 py-2 px-4 bg-gray-100 text-lg text-slate-700">
                <span className="font-normal text-slate-800">Name:</span>{" "}
                {productData?.name}
              </div>
              <div className="flex-1 py-2 px-4 bg-gray-100 text-lg text-slate-700">
                <span className="font-normal text-slate-800">Size:</span>{" "}
                {selectedSize || "Not selected"}
              </div>
              <div className="flex-1 py-2 px-4 bg-gray-100 text-lg text-slate-700">
                <span className="font-normal text-slate-800">Quantity:</span>{" "}
                {quantity}
              </div>
              <div className="flex-1 py-2 px-4 bg-gray-100 text-lg text-slate-700">
                <span className="font-normal text-slate-800">Total Price:</span>{" "}
                $ {totalPrice}
              </div>
            </div>

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
          </div>
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
  );
};

export default ProductOrderModal;
