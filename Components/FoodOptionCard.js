export default function FoodOptionCard({ food }) {
  return (
    <div className="inline-block text-center mx-3 my-10 w-24">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${food?.imageId}`}
        alt={food?.action?.text}
        className="w-full h-40 object-cover rounded-md"
      />
      
    </div>
  );


}

//<p className="text-sm mt-2 font-semibold">{food?.action?.text}</p>