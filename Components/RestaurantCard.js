
import { Link } from "react-router-dom";
export default function RestaurantCard({ restInfo }) {
  if (!restInfo?.info) return null;

  const { cloudinaryImageId, name, avgRating, sla, aggregatedDiscountInfoV3,cuisines,areaName,id } = restInfo.info;

  return (
    
    
    <Link to={"city/vizag/" + id}>
    <div className="flex flex-col gap-4 w-72 bg-white rounded-lg shadow p-3
                    transition-all duration-300 ease-in-out hover:scale-[1.10] active:scale-[0.98] cursor-pointer">
  {/* Image + Discount */}
  <div className="relative">
    <img
      className="w-full h-48 object-cover rounded-md"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
      alt={name}
    />
    {aggregatedDiscountInfoV3?.header && (
      <p className="absolute bottom-2 left-2 text-gray-800 bg-white bg-opacity-80 text-sm px-2 py-1 rounded-lg font-semibold">
        {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
      </p>
    )}
  </div>

  {/* Name + Rating + Time */}
  <div className="space-y-1">
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <div className="flex items-center justify-between text-sm text-gray-600">
      {avgRating && <p>⭐ {avgRating}</p>}
      {sla?.slaString && <p>⏱ {sla.slaString}</p>}
    </div>
  </div>
  <div className="space-y-1 flex flex-col text-sm text-gray-600">
    {cuisines[0] && <p>{cuisines[0]}</p>}
    {areaName && <p>{areaName}</p>}

  </div>
</div>
</Link>

  );
}
