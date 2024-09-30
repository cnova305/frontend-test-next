import { IoWarning } from "react-icons/io5";

function SliderErrorCard() {
  return (
    <div className="error-color flex aspect-[12/16] min-w-[90%] flex-col items-center justify-center rounded-lg">
      <IoWarning size={150} />
      <div className="text-xl font-bold">Failed to load</div>
    </div>
  );
}
export default function SliderError() {
  return (
    <div className="slider-container flex w-[100%]">
      <div className="array-container">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="flex min-w-[70%] items-center justify-center md:min-w-[25%]"
          >
            <SliderErrorCard />
          </div>
        ))}
      </div>
    </div>
  );
}
