import React from "react";
import { XCircle } from "lucide-react"; // Import the cancel/error icon
import Link from "next/link";

const CancelPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <XCircle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-2xl font-bold text-red-600">Payment Canceled</h1>
      <p className="text-gray-700 mt-2">
        Your payment process has been canceled. If this was a mistake, you can
        try again.
      </p>
      <Link href={"/"}>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default CancelPayment;
