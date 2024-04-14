import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "./ListingItem";

const CardList = () => {
  const navigate = useNavigate();
  const [cardState, setCardState] = useState([
    {
      listingImage: "http://localhost:5173/listing-image@2x.png",
      listingTitle: "Brightwoods Cabin",
      listingSubtitle: "Bridlepath, Ontario, Canada",
      rating: 4.9,
      price: "$658",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image@2x.png",
      listingTitle: "Urban Loft",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: 4.5,
      price: "$410",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-1@2x.png",
      listingTitle: "Forestville Cottages",
      listingSubtitle: "Simcoe, Ontario Canada",
      rating: 5,
      price: "$325",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-2@2x.png",
      listingTitle: "Unionville Logde",
      listingSubtitle: "Markham, Ontario Canada",
      rating: 4.6,
      price: "$485",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-3@2x.png",
      listingTitle: "Missisuaga Aistream",
      listingSubtitle: "Missisauga, Ontario, Canada",
      rating: 4.8,
      price: "$502",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-4@2x.png",
      listingTitle: "Niagara Homes",
      listingSubtitle: "Niagara, Ontario, Canada",
      rating: 4.9,
      price: "$655",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-5@2x.png",
      listingTitle: "Sunny Estate",
      listingSubtitle: "Barcort, Ontario Canada",
      rating: 5,
      price: "$320",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-6@2x.png",
      listingTitle: "Lawrence Hills",
      listingSubtitle: "Lawrence, Ontario Canada",
      rating: 5,
      price: "$350",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-7@2x.png",
      listingTitle: "Simcoe Lake Lodge",
      listingSubtitle: "Simcoe, Ontario, Canada",
      rating: 5,
      price: "$395",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-8@2x.png",
      listingTitle: "Wasaga Beach Home",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: 5,
      price: "$385",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-9@2x.png",
      listingTitle: "Banff Hills",
      listingSubtitle: "Banff, Alberta, Canada",
      rating: 5,
      price: "$385",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-10@2x.png",
      listingTitle: "Creemore Canada",
      listingSubtitle: "Creemore, Alberta, Canada",
      rating: 5,
      price: "$385",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-11@2x.png",
      listingTitle: "Kawartha Lakes",
      listingSubtitle: "Kawartha, Alberta,  Canada",
      rating: 5,
      price: "$385",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-12@2x.png",
      listingTitle: "Revelstoke Cabin",
      listingSubtitle: "Revelstoke, Alberta, Canada",
      rating: 5,
      price: "$385",
      showBestTime: true,
    },
    {
      listingImage: "http://localhost:5173/image-13@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: 5,
      price: "$385",
      showBestTime: false,
    },
    {
      listingImage: "http://localhost:5173/image-14@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: 5,
      price: "$385",
      showBestTime: false,
    },
  ]);

  const onListingItemContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="w-full flex flex-row flex-wrap items-start justify-center gap-[20px_18.7px] max-w-[1280px] min-h-[1692px] text-left text-xs text-accent font-archivo mq1275:max-w-full">
      {cardState.map((item, index) => (
        <ListingItem
          key={item}
          listingImage={item.listingImage}
          listingTitle={item.listingTitle}
          listingSubtitle={item.listingSubtitle}
          rating={item.rating}
          price={item.price}
          showBestTime={item.showBestTime}
          onListingItemContainerClick={onListingItemContainerClick}
        />
      ))}
    </section>
  );
};

export default CardList;
