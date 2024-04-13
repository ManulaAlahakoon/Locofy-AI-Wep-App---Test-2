import DetailsCard from "./DetailsCard";

const ListingDescription = () => {
  return (
    <div className="self-stretch box-border flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[20px] max-w-full text-left text-5xl text-dark font-archivo border-b-[1px] border-solid border-light-grey-border">
      <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-semibold font-inherit mq450:text-lgi">
        About this home
      </h3>
      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-base mq1275:flex-wrap mq750:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[539px] max-w-full mq450:gap-[20px] mq750:min-w-full">
          <div className="self-stretch relative leading-[160%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical]">
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:17px]">
              <b className="font-archivo">Hosted with Love:</b>
              <span>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </span>
            </p>
            <p className="m-0">
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </p>
          </div>
          <div className="w-[88px] relative tracking-[0.46px] leading-[26px] font-semibold text-accent text-center inline-block min-w-[88px]">
            Show more
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[139px] pl-0 box-border gap-[24px] min-w-[470px] max-w-full text-lg mq1275:flex-1 mq1275:pr-0 mq1275:box-border mq750:min-w-full">
          <DetailsCard
            container="/frame-65.svg"
            dedicatedWorkspace="Dedicated workspace"
            aPrivateRoomEquippedWithW="A private room equipped with WiFi"
          />
          <DetailsCard
            container="/frame-65-1.svg"
            dedicatedWorkspace="Self check-in"
            aPrivateRoomEquippedWithW="Check in with just your phone"
            propMinWidth="111px"
            propMinWidth1="unset"
          />
          <DetailsCard
            container="/frame-65-2.svg"
            dedicatedWorkspace="Free cancellation"
            aPrivateRoomEquippedWithW="Cancel anytime"
            propMinWidth="unset"
            propMinWidth1="115px"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
