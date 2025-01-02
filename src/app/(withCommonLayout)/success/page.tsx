import React from "react";
import { CheckCircle } from "lucide-react"; // Import the specific icon you want to use

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-gray-700 mt-2">
        Thank you for your purchase. Your payment has been successfully
        processed.
      </p>
    </div>
  );
};

export default PaymentSuccess;
