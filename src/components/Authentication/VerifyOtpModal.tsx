"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Button,
  InputOtp,
} from "@nextui-org/react";
import Image from "next/image";

import { toast } from "sonner";
import { useAppDispatch } from "../Redux/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { userOTPSend } from "./userRegister";
import { userLogin } from "./userLogin";
import { setUser } from "../Redux/Slice/authSlice";

interface VerifyOtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  loginData: { email: string; password: string } | null;
}

const VerifyOtpModal: React.FC<VerifyOtpModalProps> = ({
  isOpen,
  onClose,
  loginData,
}) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleVerifyOtp = async () => {
    if (!loginData) {
      toast.error("Invalid login data.");
      return;
    }
    setIsLoading(true);
    const toastId = toast.loading("Verifying...!");
    try {
      const otpData = {
        email: loginData?.email,
        otp: value,
      };

      const response = await userOTPSend(otpData);
      if (response?.statusCode === 200) {
        const res = await userLogin(loginData);
        if (res?.statusCode === 201) {
          const redirectTo = searchParams.get("redirect") || "/";
          router.push(redirectTo);
          dispatch(setUser({ accessToken: res.data?.accessToken }));
          toast.success(response?.message, { id: toastId, duration: 2000 });
          onClose();
        } else {
          toast.error(res?.message, { id: toastId, duration: 2000 });
          setIsLoading(false);
        }
      } else {
        toast.error(response?.message, { id: toastId, duration: 1000 });
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton
    >
      <ModalContent className="backdrop-blur-md bg-white/30">
        <ModalBody className="">
          <div className="w-full flex flex-col justify-center items-center pt-5">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"https://cdn-icons-png.flaticon.com/128/9731/9731748.png"}
                alt="Enter OTP Icon"
                width={100}
                height={100}
                className="h-16 w-16"
              />
              <h1 className="text-center text-white text-xl font-medium">
                Enter OTP Code
              </h1>
            </div>
            <InputOtp length={6} value={value} onValueChange={setValue} />
          </div>
        </ModalBody>
        <ModalFooter className="w-full items-center">
          <Button
            size="sm"
            className=" w-48  mx-auto primaryColorBg text-white font-bold rounded-full uppercase"
            onClick={handleVerifyOtp}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VerifyOtpModal;
