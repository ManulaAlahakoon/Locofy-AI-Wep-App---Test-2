const ListingItem = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  onListingItemContainerClick,
}) => {
  return (
    <div
      className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-col items-start justify-start relative min-w-[280px] cursor-pointer text-left text-xs text-accent font-archivo border-[1px] border-solid border-light-grey-border mq750:flex-1"
      onClick={onListingItemContainerClick}
    >
      <img
        className="self-stretch h-[300px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={listingImage}
      />
      <div className="!m-[0] absolute top-[10px] left-[10px] rounded-smi bg-white hidden flex-row items-center justify-start py-1.5 px-[7px] gap-[2px] z-[1]">
        <img className="h-2.5 w-[6.7px] relative" alt="" src="/vector-7.svg" />
        <div className="h-2 relative tracking-[-0.01em] font-medium flex items-center">
          Superhost
        </div>
      </div>
      <div className="w-[30px] h-[30px] absolute !m-[0] top-[10px] right-[27px] z-[1] flex items-center justify-center">
        <img
          className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.533)]"
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[14px] text-base text-dark">
        <div className="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px] mq450:flex-wrap">
          <div className="w-[231px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px]">
            <div className="relative tracking-[0.02em] leading-[16px] font-semibold">
              {listingTitle}
            </div>
            <div className="relative text-sm tracking-[0.02em] leading-[14px] text-light-text">
              {listingSubtitle}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[5px] text-sm">
            <div className="h-2.5 relative tracking-[0.02em] font-semibold flex items-center min-w-[22px]">
              {rating}
            </div>
            <img
              className="h-[13px] w-[13px] relative min-h-[13px]"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-0 gap-[20px] text-lgi mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start py-0 pr-[75px] pl-0 gap-[2px]">
            <div className="h-[13px] relative tracking-[0.02em] font-semibold inline-block min-w-[45px] whitespace-nowrap">
              {price}
            </div>
            <div className="h-2.5 relative text-sm tracking-[0.02em] text-light-text inline-block min-w-[37px]">
              /night
            </div>
          </div>
          {showBestTime && (
            <div className="flex flex-row items-center justify-start gap-[6px] text-sm text-accent">
              <img
                className="h-[18px] w-[18px] relative object-cover min-h-[18px]"
                loading="lazy"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className="relative tracking-[0.02em] inline-block min-w-[70px]">
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
