/*import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodOption from "./FoodOption";
import Shimmer from "./Shimmer";
import { Outlet, useParams } from "react-router-dom";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  async function fetchData() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7096052&lng=83.3137109&is-seo-homepage-enabled=true";
    const response = await fetch(proxyServer + swiggyAPI);
    const data = await response.json();
    setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(() => {
    fetchData();
  }, []);
 if (RestData.length === 0) {
  return <Shimmer />;
}

  return (
    <>
    <div className = "mb-5 mt-10">
    <div className = "text-3xl font-extrabold pl-30 my-0">
      What's on your mind?
    </div>

    <FoodOption />
    
    </div>

    <div>
    <div className = "text-3xl font-extrabold pl-35">
      Top restaurant chains in Vizag
    </div>
    <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap mt-1 mb-15">
      <div className="inline-flex  mx-3 my-0 w-24">
         {RestData.map((restInfo) => (
        <Link to={`/restaurant/${restInfo?.info?.id}`} key={restInfo?.info?.id}>
  <RestaurantCard restInfo={restInfo} />
</Link>
      ))}
      </div>
      
    </div>
    </div>

    <div className="flex flex-wrap w-[80%] mx-auto gap-5 mt-10">
      {RestData.map((restInfo) => (
        <Link to={`/restaurant/${restInfo?.info?.id}`} key={restInfo?.info?.id}>
  <RestaurantCard restInfo={restInfo} />
</Link>
      ))}
    </div>

    </>
  );
}*/

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import FoodOption from "./FoodOption";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);
  const { id } = useParams(); // ← detect if we're inside /city/vizag/:id

  async function fetchData() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7096052&lng=83.3137109&is-seo-homepage-enabled=true";
    const response = await fetch(proxyServer + swiggyAPI);
    const data = await response.json();
    setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  // ✅ If /restaurant/city/vizag/:id is active, show the nested route only
  if (id) {
    return <Outlet />;
  }

  return (
    <>
      <div className="shadow-md  top-0 left-0 right-0 h-[80px] py-5 px-8 bg-white z-50 flex items-center justify-between mb-5">
            <div className="flex items-center gap-5">
    <a href="https://www.swiggy.com/" target="_blank" rel="noreferrer">
      <img
        src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
        alt="Swiggy Logo"
        className="w-36 h-auto bg-[#ff5200]"
      />
    </a>
    <span className="text-black font-large text-xl hidden sm:inline">Other</span>
  </div>
          <ul className="flex gap-6  text-gray-700 text-xl">
    <li><a href="#">Swiggy Corporate</a></li>
    <li><a href="#">Search</a></li>
    <li><a href="#">Offers</a></li>
    <li><a href="#">Help</a></li>
    <li><a href="#">Sign In</a></li>
    <li><a href="#">Cart</a></li>
  </ul>
      </div>
      <div className="mb-5 mt-10">
        <div className="text-3xl font-extrabold pl-30 my-0">
          What's on your mind?
        </div>
        <FoodOption />
      </div>

      <div>
        <div className="text-3xl font-extrabold pl-35">
          Top restaurant chains in Vizag
        </div>
        <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap mt-1 mb-15 ">
          <div className="inline-flex mx-3 my-0 w-24">
            {RestData.map((restInfo) => (
              <RestaurantCard restInfo={restInfo} key={restInfo?.info?.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-[80%] mx-auto gap-5 mt-10">
        {RestData.map((restInfo) => (
          <RestaurantCard restInfo={restInfo} key={restInfo?.info?.id} />
        ))}
      </div>
    </>
  );
}
