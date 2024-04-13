import Header from "../components/Header";
import Connection from "../components/Connection";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-black font-archivo">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className="self-stretch bg-gray-100 flex flex-col items-start justify-start py-5 px-[50px] box-border gap-[44px] max-w-full mq750:gap-[22px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
        <Connection />
        <section className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
      <div className="self-stretch bg-gray-100 box-border flex flex-col items-center justify-start py-3 px-20 max-w-full border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[1280px] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[1280px] gap-[20px] mq1275:max-w-full mq750:flex-wrap">
            <div className="relative leading-[17px] font-light">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
              <div className="relative leading-[17px] font-light inline-block min-w-[85px]">
                Privacy Policy
              </div>
              <div className="relative leading-[17px] font-light inline-block min-w-[120px]">{`Terms & Conditions`}</div>
              <div className="relative leading-[17px] font-light inline-block min-w-[67px]">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
