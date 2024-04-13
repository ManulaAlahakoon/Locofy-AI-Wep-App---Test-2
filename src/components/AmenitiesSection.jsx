import { useMemo } from "react";

const AmenitiesSection = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propFlex,
  propMinHeight,
  propMinWidth,
  propWidth,
  propFlex1,
  propMinWidth1,
  propAlignSelf,
  propMinWidth2,
  propMinWidth3,
}) => {
  const amenitiesSection1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const mdilakeIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const lakesideStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const phfireextinguisherStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const kitchenStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const securityCamerasOnStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const wifiStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start py-0 pr-[22.3px] pl-0 box-border gap-[14px] min-w-[195px] text-left text-base text-dark font-archivo"
      style={amenitiesSection1Style}
    >
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-[21px] w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div
          className="relative inline-block min-w-[64px]"
          style={lakesideStyle}
        >
          {lakeside}
        </div>
      </div>
      <div
        className="w-24 flex flex-row items-center justify-start gap-[10px]"
        style={phfireextinguisherStyle}
      >
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className="flex-1 relative" style={kitchenStyle}>
          {kitchen}
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-start gap-[10px]"
        style={frameDivStyle}
      >
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className="relative" style={securityCamerasOnStyle}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          loading="lazy"
          alt=""
          src={ionwifi}
        />
        <div className="relative inline-block min-w-[27px]" style={wifiStyle}>
          {wifi}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
