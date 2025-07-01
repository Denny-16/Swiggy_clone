import { FoodData } from "../Utils/FoodData";
import FoodOptionCard from "./FoodOptionCard";

export default function FoodOption() {
  return (
    <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap my-0">
      {FoodData.map((food) => (
        <a href={food?.action?.link} key={food?.id}>
          <FoodOptionCard food={food} />
        </a>
      ))}
    </div>
  );
}

