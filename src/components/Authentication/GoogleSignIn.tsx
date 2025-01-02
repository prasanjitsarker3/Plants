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
    try {
      const idToken = credentialResponse.credential;
      const response = await userGoogleLogin({ token: idToken });
      if (response?.statusCode === 200) {
        dispatch(setUser({ accessToken: response.data }));
        toast.success(response?.message, { id: toastId, duration: 2000 });
        const redirectTo = searchParams.get("redirect") || "/";
        router.push(redirectTo);
      } else {
        toast.error("Login Failed", { id: toastId, duration: 1000 });
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Error:", error);
    }
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
