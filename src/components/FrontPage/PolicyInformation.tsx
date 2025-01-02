import Image from "next/image";
import React from "react";

const PolicyInformation = () => {
  const policyData = [
    {
      id: 1,
      name: "free shipping",
      title: "buy bdt 3000+ & Get free delivery",
      icon: "/Photo/fast.png",
    },
    {
      id: 2,
      name: "7 DAYS EXCHANGE",
      title: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE",
      icon: "/Photo/return.png",
    },
    {
      id: 3,
      name: "100% PAYMENT SECURE",
      title: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
      icon: "/Photo/payment.png",
    },
  ];
  return (
    <div className="w-full container mx-auto md:px-0 px-8 pt-6 pb-12">
      <div className="grid grid-cols-12 md:gap-0 gap-5 primaryColorBg py-8 px-4">
        {policyData?.map((data) => (
          <div key={data.id} className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src={data.icon}
                alt={data.name}
                width={100}
                height={100}
                className={`${data.id == 2 ? " h-12 w-12 mt-2" : "h-16 w-16"}`}
              />
              <div className="uppercase text-white">
                <h1>{data.name}</h1>
                <h1>{data.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyInformation;
