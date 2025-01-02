"use client";
import ProductCart from "@/components/Common/ProductCart";
import ShoppingBag from "@/components/Common/ShoppingBag";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import { productData } from "@/components/UtlitiFunction/ProductData";

const ProductPage = () => {
  return (
    <div className=" 2xl:py-20 md:py-10">
      <div className="w-full container mx-auto space-y-6">
        <ShoppingBag />
      </div>
      <div className=" w-full container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
          {productData?.map((item: any) => (
            <ProductCart item={item} key={item.id} discount={true} />
          ))}
        </div>

        <DiscountBanner />
      </div>
    </div>
  );
};

export default ProductPage;
