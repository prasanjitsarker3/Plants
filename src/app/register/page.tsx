"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { userRegister } from "@/components/Authentication/userRegister";
import VerifyOtpModal from "@/components/Authentication/VerifyOtpModal";
import GoogleSignIn from "@/components/Authentication/GoogleSignIn";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  } | null>(null);
  const [isVerifyModalOpen, setVerifyModalOpen] = useState(false);
  const closeModal = () => setVerifyModalOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("Register Processing...!");
    try {
      setLoginData({
        email: data.email,
        password: data.password,
      });
      const response = await userRegister(data);
      setVerifyModalOpen(false);
      console.log("Response", response);
      if (
        response?.statusCode === 201 &&
        response?.data?.isVerified === false
      ) {
        toast.success(response?.message, { id: toastId, duration: 1000 });
        setVerifyModalOpen(true);
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, { id: toastId, duration: 1000 });
        console.error(err.message);
        setVerifyModalOpen(false);
      } else {
        setVerifyModalOpen(false);
        toast.error("An unknown error occurred", {
          id: toastId,
          duration: 1000,
        });
        console.error(err);
      }
    }
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

      {/* Register Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="p-8 rounded-lg max-w-sm w-full backdrop-blur-md bg-white/30">
          <VerifyOtpModal
            isOpen={isVerifyModalOpen}
            onClose={closeModal}
            loginData={loginData}
          />
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">
            Create Your Account
          </h1>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md placeholder:text-white border border-gray-200 bg-transparent text-white focus:outline-none"
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md placeholder:text-white border border-gray-200 bg-transparent text-white focus:outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
                className="w-full p-3 rounded-md placeholder:text-white border border-gray-200 bg-transparent text-white focus:outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
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
              Register
            </button>
          </form>

          <div className="my-4 flex items-center justify-center space-x-2">
            <hr className="w-1/3" />
            <span className="text-white">or</span>
            <hr className="w-1/3" />
          </div>

          <GoogleSignIn />
          <div className="text-center mt-6 text-white">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-white font-normal">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
