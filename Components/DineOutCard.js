export default function DineOutCard({ inputData }) {
  return (
    <div className="inline-block mx-2 mt-10 mb-5 text-center w-[340px]">
      <div className="relative">
        <img
          className="w-full h-[180px] object-cover rounded-md"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${inputData?.info?.mediaFiles[0]?.url}`}
          alt="restaurant"
        />
        <p className="absolute bottom-4 left-0 text-white bg-black bg-opacity-50 px-2">
          {inputData?.info?.name}
        </p>
        <p className="absolute bottom-4 right-0 text-white bg-black bg-opacity-50 px-2">
          {inputData?.info?.rating?.value}
        </p>
      </div>
    </div>
  );
}