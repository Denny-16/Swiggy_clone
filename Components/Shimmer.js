export default function Shimmer() {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto gap-5 mt-10">
      {Array(10).fill("").map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-72 h-[300px] bg-gray-200 rounded-lg animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-48 bg-gray-300 rounded-md"></div>

          {/* Title */}
          <div className="h-4 bg-gray-300 w-3/4 mx-auto rounded"></div>

          {/* Rating + Time */}
          <div className="h-4 bg-gray-300 w-1/2 mx-auto rounded"></div>

          {/* Cuisines / Area */}
          <div className="h-4 bg-gray-300 w-2/3 mx-auto rounded"></div>
        </div>
      ))}
    </div>
  );
}

