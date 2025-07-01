import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ff5200] font-serif">
      <div className="flex justify-between items-center px-32 py-5">
        <img
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="swiggy_logo"
          className="w-40 h-12"
        />
        <div className="text-white text-base font-bold flex gap-8 justify-center items-center">
          <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
          <a className="border border-white rounded-xl py-3 px-4" href="https://partner.swiggy.com/login#/swiggy" target="_blank">Get The App</a>
          <a className="border border-black bg-black rounded-xl py-3 px-4" href="https://partner.swiggy.com/login#/swiggy" target="_blank">Sign In</a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="vegetables_image"
          className="absolute h-[450px] w-[200px] top-0 left-0"
        />
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="dry_vegetables images"
          className="absolute h-[450px] w-[250px] top-0 right-0"
        />
        <div className="text-center text-white w-[60%] pl-3 mx-auto font-bold text-5xl">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[70%] mx-auto flex mt-5 gap-5 my-10">
          <input
            className="bg-white w-[40%] text-xl px-6 py-4 rounded-lg"
            placeholder="Krishna Nagar, Maharanipeta"
          />
          <input
            className="bg-white w-[55%] text-xl px-6 py-4 rounded-lg"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>

      <div className="max-w-[80%] mx-auto flex mb-10">
        <Link to="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="Restaurants"
          />
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt="InstaMart"
          />
        </a>
        <a href="https://www.swiggy.com/dineout" target="_blank">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt="Dineout"
          />
        </a>
      </div>
    </header>
  );
}
