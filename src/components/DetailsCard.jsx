import { useMemo } from "react";

const DetailsCard = ({
  container,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex flex-row items-center justify-start gap-[20px] text-left text-lg text-dark font-archivo mq450:flex-wrap">
      <img
        className="h-[60px] w-[60px] relative rounded-lg overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={container}
      />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <div
          className="relative tracking-[0.02em] leading-[150%] font-semibold"
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </div>
        <div
          className="relative text-base tracking-[0.02em] text-gray-200"
          style={aPrivateRoomStyle}
        >
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
