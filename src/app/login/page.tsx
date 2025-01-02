/* eslint-disable react/no-unescaped-entities */
"use client";
import GoogleSignIn from "@/components/Authentication/GoogleSignIn";
import { userLogin } from "@/components/Authentication/userLogin";
import { useAppDispatch } from "@/components/Redux/hooks";
import { setUser } from "@/components/Redux/Slice/authSlice";
import { Spinner } from "@nextui-org/react";
import { LucideEye, LucideEyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleEmailLogin = async (data: FormData) => {
    const toastId = toast.loading("Login Processing !");
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/bannerVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className=" p-8 rounded-lg  max-w-sm w-full backdrop-blur-md bg-white/30 ">
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">
            Login to Plants
          </h1>
          <form onSubmit={handleSubmit(handleEmailLogin)} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 rounded-md placeholder:text-white border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } bg-transparent text-white focus:outline-none`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-full p-3 rounded-md placeholder:text-white border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } bg-transparent text-white focus:outline-none`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-white"
              >
                {showPassword ? (
                  <LucideEyeOff size={20} />
                ) : (
                  <LucideEye size={20} />
                )}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#028355] text-white transition duration-300 rounded-full"
            >
              Login with Email
            </button>
          </form>
          <div className="my-4 flex items-center justify-center space-x-2">
            <hr className="w-1/3" />
            <span className=" primaryColor">or</span>
            <hr className="w-1/3" />
          </div>
          <GoogleSignIn />
          <div className="text-center mt-6 text-white">
            <p>
              Don't have an account?{" "}
              <Link href="/register" className=" text-white font-normal">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
