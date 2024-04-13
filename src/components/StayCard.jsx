import { useMemo } from "react";

const StayCard = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-start min-w-[325px] max-w-full [row-gap:20px] text-left text-xs text-accent font-archivo border-[1px] border-solid border-light-grey-border mq450:flex-wrap">
      <div
        className="h-[143px] w-[181px] flex flex-col items-start justify-start pt-2.5 px-0 pb-[103px] box-border relative gap-[10px] bg-[url('/public/frame-91@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[181px] mq450:flex-1"
        style={frameDiv1Style}
      >
        <div className="!m-[0] absolute top-[10px] left-[10px] rounded-smi bg-white hidden flex-row items-center justify-start py-1.5 px-[7px] gap-[2px] z-[0]">
          <img
            className="h-2.5 w-[6.7px] relative"
            alt=""
            src="/vector-7.svg"
          />
          <div className="h-2 relative tracking-[-0.01em] font-medium flex items-center">
            Superhost
          </div>
        </div>
        <div className="w-[30px] h-[30px] absolute !m-[0] top-[10px] right-[9.5px] flex items-center justify-center z-[1]">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.533)]"
            alt=""
            src="/hearticon-1.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start p-4 box-border gap-[20px] min-w-[164px] text-base text-dark">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[33.3px] pl-0 gap-[12px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative tracking-[0.02em] font-semibold">
              {brightwoodsEstate}
            </div>
            <div
              className="relative text-sm tracking-[0.02em] leading-[15.2px] text-light-text whitespace-nowrap"
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[5px] text-sm">
            <div className="h-2.5 relative tracking-[0.02em] font-semibold flex items-center min-w-[22px]">
              4.8
            </div>
            <img
              className="h-[13px] w-[13px] relative min-h-[13px]"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-accent">
          <div className="flex flex-row items-center justify-start gap-[2px]">
            <div className="h-[11px] relative tracking-[0.02em] font-semibold inline-block min-w-[38px] whitespace-nowrap">
              $502
            </div>
            <div className="h-2.5 relative text-sm tracking-[0.02em] text-light-text inline-block min-w-[37px]">
              /night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
