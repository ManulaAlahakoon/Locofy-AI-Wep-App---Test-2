import { useMemo } from "react";

const Footer = ({ propMargin, propMargin1, propMargin2 }) => {
  const supportStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const localhostStyle = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className="self-stretch bg-light-bg box-border flex flex-row flex-wrap items-start justify-center py-5 px-20 min-h-[288px] max-w-full text-left text-base text-dark font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start max-w-[1280px] mq1275:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[10px] max-w-full mq1275:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-5 pb-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
            <h3
              className="m-0 relative text-xl font-semibold font-inherit inline-block min-w-[75px] mq450:text-base"
              style={supportStyle}
            >
              Support
            </h3>
            <div className="relative inline-block min-w-[85px]">
              Help Centre
            </div>
            <div className="relative inline-block min-w-[63px]">AirCover</div>
            <div className="relative">Combating discrimination</div>
            <div className="relative">Supporting people with disabilities</div>
            <div className="relative">Cencellation options</div>
            <div className="relative">Report neighbourhood concern</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-5 pb-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
            <h3
              className="m-0 relative text-xl font-semibold font-inherit inline-block min-w-[73px] mq450:text-base"
              style={hostingStyle}
            >
              Hosting
            </h3>
            <div className="relative inline-block min-w-[83px]">Local home</div>
            <div className="relative inline-block min-w-[107px]">
              Cover for hosts
            </div>
            <div className="relative">Hosting resources</div>
            <div className="relative inline-block min-w-[128px]">
              Community forum
            </div>
            <div className="relative">Hosting responsibly</div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-5 pb-0 pr-5 pl-0 box-border gap-[14px] min-w-[315px] max-w-full">
            <h3
              className="m-0 relative text-xl font-semibold font-inherit inline-block min-w-[92px] mq450:text-base"
              style={localhostStyle}
            >
              Localhost
            </h3>
            <div className="relative inline-block min-w-[78px]">Newsroom</div>
            <div className="relative inline-block min-w-[99px]">
              New Features
            </div>
            <div className="relative inline-block min-w-[57px]">Careers</div>
            <div className="relative inline-block min-w-[66px]">Investres</div>
            <div className="relative inline-block min-w-[69px]">Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
