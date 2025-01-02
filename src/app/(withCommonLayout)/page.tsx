import Banner from "@/components/FrontPage/Banner";
import ContactBanner from "@/components/FrontPage/ContactBanner";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import DiscountTimeShow from "@/components/FrontPage/DiscountTimeShow";
import FeaturedProduct from "@/components/FrontPage/FeaturedProduct";
import PlantGallery from "@/components/FrontPage/PlantGallery";
import PolicyInformation from "@/components/FrontPage/PolicyInformation";
import ProductBanner from "@/components/FrontPage/ProductBanner";
import ProductCollection from "@/components/FrontPage/ProductCollection";
import SummerCollection from "@/components/FrontPage/SummarCollection";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <ProductBanner />

      <FeaturedProduct />
      <DiscountBanner />
      {/* <ProductCollection /> */}
      <SummerCollection />
      <PlantGallery />
      <PolicyInformation />
      <DiscountTimeShow />
      <ContactBanner />
    </div>
  );
}
