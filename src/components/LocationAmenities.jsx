import { Button } from "@mui/material";
import AmenitiesSection from "./AmenitiesSection";

const LocationAmenities = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[19px] max-w-full text-left text-5xl text-dark font-archivo mq1275:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[547px] max-w-full mq750:min-w-full">
        <h3 className="m-0 w-[780.8px] relative text-inherit tracking-[0.02em] font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
          Amenities
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-base mq450:gap-[15px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.605"
              propMinHeight="20px"
              propMinWidth="89px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="114px"
              propAlignSelf="unset"
              propMinWidth2="68px"
              propMinWidth3="70px"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6303"
              propMinHeight="20px"
              propMinWidth="120px"
              propWidth="unset"
              propFlex1="unset"
              propMinWidth1="55px"
              propAlignSelf="unset"
              propMinWidth2="95px"
              propMinWidth3="84px"
            />
          </div>
          <Button
            className="w-[185px] h-12 hover:bg-saddlebrown"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className="w-[480px] flex flex-col items-start justify-start min-w-[480px] max-w-full mq1275:flex-1 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0px] mq750:flex-wrap">
            <div className="w-[326px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[5px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-lgi">
                Where you’ll be
              </h3>
              <div className="flex flex-row items-center justify-start gap-[6px] text-base">
                <img
                  className="h-[11px] w-[9.3px] relative"
                  alt=""
                  src="/vector-3.svg"
                />
                <div className="relative inline-block min-w-[109px]">
                  The Bridle Path
                </div>
              </div>
            </div>
            <div className="w-[154px] rounded-xl flex flex-row items-start justify-start py-0.5 px-0 box-border gap-[24px] text-center text-3xs">
              <div className="w-[108px] flex flex-row items-start justify-start gap-[10px] text-left text-base">
                <img
                  className="h-[47px] w-[47px] relative"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 gap-[2px]">
                  <div className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[38px]">
                    20°C
                  </div>
                  <div className="relative text-sm tracking-[0.02em] text-gray-200 inline-block min-w-[93px] whitespace-nowrap">
                    Broken clouds
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img className="w-10 h-10 relative" alt="" src="/sun.svg" />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      23°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Sun
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    27 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="w-10 h-10 relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      22°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Mon
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    28 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img className="w-10 h-10 relative" alt="" src="/sun.svg" />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      23°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Tue
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    29 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="w-10 h-10 relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      20°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Wed
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    30 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img
                    className="w-10 h-10 relative"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      19°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Thu
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    31 Aug
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[8px]">
                <div className="w-10 flex flex-col items-start justify-start gap-[8px]">
                  <img className="w-10 h-10 relative" alt="" src="/sun.svg" />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <b className="self-stretch h-[11px] relative inline-block">
                      24°C
                    </b>
                  </div>
                </div>
                <div className="w-10 flex flex-col items-center justify-start">
                  <div className="self-stretch h-[11px] relative inline-block">
                    Fri
                  </div>
                  <div className="self-stretch h-[11px] relative inline-block">
                    1 Sep
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[248px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/rectangle-1@2x.png"
          />
          <img
            className="w-[37px] h-[65px] absolute !m-[0] right-[12px] bottom-[161px] rounded overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAmenities;
