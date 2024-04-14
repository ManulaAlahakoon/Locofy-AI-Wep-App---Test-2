import {useCallback,useState} from "react"
import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import CardList from "../components/CardList";
import Footer from "../components/Footer";

const Homepage = () => {
  const [showAll, setShowAll] = useState(false)

  const onShowMoreButtonClick = useCallback(() => {
    if (!showAll) {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  })
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal] text-left text-sm text-black font-archivo">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="self-stretch flex flex-col items-center justify-start py-6 px-20 gap-[22px] mq750:pl-10 mq750:pr-10 mq750:box-border mq1275:pt-5 mq1275:pb-5 mq1275:box-border">
        <SearchSectionHeader />
        <CardList showAll={ showAll } />
        <Button
          className="w-[147px] h-12"
          disableElevation={true}
          variant="outlined"
          onClick = {onShowMoreButtonClick}
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
        >
          Show more
        </Button>
      </main>
      <Footer />
      <div className="self-stretch box-border flex flex-col items-center justify-start py-3 px-20 max-w-full border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[1280px] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[1280px] gap-[20px] mq750:flex-wrap mq1275:max-w-full">
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

export default Homepage;
