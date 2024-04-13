import { useMemo } from "react";

const ReviewCard = ({
  nA,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex-1 rounded-lg bg-white box-border flex flex-col items-start justify-start py-6 px-[23px] gap-[12px] min-w-[350px] max-w-full text-left text-base text-dark font-archivo border-[1px] border-solid border-light-grey-border mq750:min-w-full">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-16 w-16 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={nA}
          />
          <div className="flex flex-col items-start justify-start gap-[3px]">
            <div
              className="relative tracking-[0.02em] leading-[150%] font-semibold inline-block min-w-[101px]"
              style={johnnyCashStyle}
            >
              {johnnyCash}
            </div>
            <div
              className="relative text-sm tracking-[0.02em] text-gray-200 inline-block min-w-[69px]"
              style={june2023Style}
            >
              {june2023}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-5 px-0 gap-[3px]">
          <div className="h-[11px] relative tracking-[0.02em] font-semibold flex items-center min-w-[25px]">
            {prop}
          </div>
          <img className="h-4 w-4 relative" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="self-stretch relative tracking-[0.02em] leading-[160%]">
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
