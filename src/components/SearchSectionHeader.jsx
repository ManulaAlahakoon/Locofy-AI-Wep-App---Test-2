const SearchSectionHeader = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between pt-3.5 px-0 pb-0 box-border max-w-[1280px] gap-[20px] text-left text-xl text-black font-archivo mq750:flex-wrap mq1275:max-w-full">
      <div className="flex flex-row items-center justify-start gap-[4px]">
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-normal font-inherit inline-block min-w-[127px] mq450:text-base mq450:leading-[19px]">
          Stays nearby:
        </h3>
        <h3 className="m-0 relative text-inherit tracking-[0.02em] leading-[120%] font-semibold font-inherit mq450:text-base mq450:leading-[19px]">
          Toronto Ontario
        </h3>
      </div>
      <div className="w-[84px] rounded-4xs bg-white box-border flex flex-row items-center justify-start p-[5px] border-[0.7px] border-solid border-light-grey-border">
        <div className="rounded-md bg-accent flex flex-row items-start justify-start p-2">
          <img className="h-5 w-5 relative" alt="" src="/bento-menu1.svg" />
        </div>
        <div className="flex flex-row items-start justify-start p-2">
          <img className="h-5 w-5 relative" alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
