import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import RestaurantMenu from "./Components/RestaurantMenu";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<Restaurant />}>
        <Route path="city/vizag/:id" element={<RestaurantMenu />} />
      </Route>

    </Routes>
  );
}
