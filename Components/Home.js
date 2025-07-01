
import Header from "./Header";
import FoodOption from "./FoodOption";
import InstamartOption from "./InstamartOption";
import DineOutOption from "./DineOutOption";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <FoodOption />
      <InstamartOption />
      <DineOutOption />

      <div className="text-center mt-10">
        <Link to="/restaurant">
          <button className="px-4 py-2 bg-orange-500 text-white rounded">
            Go to Restaurant Page
          </button>
        </Link>
      </div>
    </>
  );
}




