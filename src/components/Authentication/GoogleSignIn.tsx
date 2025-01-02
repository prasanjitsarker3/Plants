import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { toast } from "sonner";
import { useAppDispatch } from "../Redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { userGoogleLogin } from "./userLogin";
import { setUser } from "../Redux/Slice/authSlice";

const GoogleSignIn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGoogleLogin = async (credentialResponse: any) => {
    const toastId = toast.loading("Login Processing !");
  };

  return (
    <div className="">
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => toast.error("Login failed. Please try again.")}
      />
    </div>
  );
};

export default GoogleSignIn;
