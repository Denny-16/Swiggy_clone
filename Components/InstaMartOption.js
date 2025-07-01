
import { InstaMartData } from "../Utils/InstaMartData";
import InstaMartCard from "./InstaMartCard";

export default function InstaMartOption() {
  return (
    <div className="w-[80%] mx-auto overflow-x-auto whitespace-nowrap my-5">
      {InstaMartData.map((food) => (
        <a href={food?.action?.link} key={food?.id}>
          <InstaMartCard food={food} />
        </a>
      ))}
    </div>
  );
}

