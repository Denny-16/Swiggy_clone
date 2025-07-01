import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [menuSections, setMenuSections] = useState([]);
  const [openSections, setOpenSections] = useState({});
  const [Selected,setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7096052&lng=83.3137109&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const cards = data?.data?.cards;
      const groupedCard =
        cards?.find(card => card?.groupedCard)?.groupedCard ||
        cards?.find(card => card?.card?.card?.groupedCard)?.card?.card?.groupedCard;

      const menuCards = groupedCard?.cardGroupMap?.REGULAR?.cards;

      const sections = menuCards?.filter(
        section =>
          section?.card?.card?.itemCards &&
          section?.card?.card?.["@type"]?.includes("ItemCategory")
      );

      const defaultOpen = {};
      sections?.forEach((_, idx) => {
        defaultOpen[idx] = true;
      });

      setMenuSections(sections || []);
      setOpenSections(defaultOpen);
    }

    fetchData();
  }, [id]);

  if (menuSections.length === 0) return <Shimmer />;

  return (
    <div className="">
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




     


      <div className="w-[70%] bg-gray-200 text-gray-600 text-center font-sans text-lg shadow-2xl rounded-lg text-cent mx-auto mb-8 py-3 px-2">
        Search for dishes
      </div>
      <div>
      <div className="w-[50%] flex justify-center items-start mb-3 ml-20">
  {/* Veg Button */}
  <button
    className={`border rounded-lg px-5 py-2 shadow-2xl mr-2 text-xl flex items-center gap-2
      ${Selected === 'veg' ? 'bg-green-500 text-white' : 'bg-white text-black'}`}
    onClick={() => setSelected(Selected === 'veg' ? null : 'veg')}
  >
    <span className="w-3 h-3 border border-green-700 rounded-full flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
    </span>
    Veg
  </button>

  {/* Non-Veg Button */}
  <button
    className={`border rounded-lg px-5 py-2 shadow-2xl mr-2 text-xl flex items-center gap-2
      ${Selected === 'non-veg' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
    onClick={() => setSelected(Selected === 'non-veg' ? null : 'non-veg')}
  >
    <span className="w-3 h-3 border border-red-700 rounded-full flex items-center justify-center">
      <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
    </span>
    Non-Veg
  </button>

  {/* Bestseller Button */}
  <button
    className={`border rounded-lg px-5 py-2 shadow-2xl mr-2 text-xl
      ${Selected === 'BestSeller' ? 'bg-yellow-400 text-white' : 'bg-white text-black'}`}
    onClick={() => setSelected(Selected === 'BestSeller' ? null : 'BestSeller')}
  >
    🌟 Bestseller
  </button>
</div>

      {menuSections.map((section, index) => (
        <div key={index} className="mb-8 w-[70%] mx-auto">
          {/* Section Header */}
          <div
            className="flex justify-between items-center cursor-pointer border-b pb-2"
            onClick={() =>
              setOpenSections(prev => ({ ...prev, [index]: !prev[index] }))
            }
          >
            <h2 className="text-xl font-semibold text-purple-800">
              🍽️ {section?.card?.card?.title}
            </h2>
            <span className="text-md">{openSections[index] ? "▲" : "▼"}</span>
          </div>

          {/* Section Items */}
          {openSections[index] &&
  section?.card?.card?.itemCards
    ?.filter(item => {
      const type = item.card.info.itemAttribute?.vegClassifier;
      const isBestseller = item.card.info.ribbon?.text === "Bestseller";

      if (Selected === "veg") return type === "VEG";
      if (Selected === "non-veg") return type === "NONVEG";
      if (Selected === "BestSeller") return isBestseller;
      return true; // show all if nothing selected
    })

            
            .map(item => {
              const info = item.card.info;

              return (
                <div
                  key={info.id}
                  className="border rounded-xl p-4 mb-6 flex justify-between gap-4 shadow-md mt-4"
                >
                  {/* Left (Text) */}
                  <div className="flex-grow">
                    <p className="text-lg font-semibold mb-1">{info.name}</p>
                    {info.price && (
                      <p className="text-sm text-gray-700 mb-1">₹{info.price / 100}</p>
                    )}
                    {info.description && (
                      <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                    )}
                    {info.ratings?.aggregatedRating?.rating && (
                      <p className="text-xs text-yellow-600">
                        ⭐ {info.ratings.aggregatedRating.rating} (
                        {info.ratings.aggregatedRating.ratingCount})
                      </p>
                    )}
                  </div>

                  {/* Right (Image + ADD) */}
                  {info.imageId && (
                    <div className="relative w-100 h-40">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                        alt={info.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-4 py-[2px] rounded-full shadow">
                        ADD
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </div>
    </div>
  );
}
