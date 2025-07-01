
import { RestaurantData } from "../Utils/DineOutData";
import DineOutCard from "./DineOutCard";

export default function DineOutOption() {
  return (
    <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap">
      {RestaurantData.map((inputData) => (
        <DineOutCard key={inputData?.info?.id} inputData={inputData} />
      ))}
    </div>
  );
}