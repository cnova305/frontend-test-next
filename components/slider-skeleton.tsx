import { IoWarning } from "react-icons/io5";

function SliderError() {
  return (
    <div className="error-bg-color error-color flex aspect-[12/16] min-w-[80%] flex-col items-center justify-center rounded-lg border">
      <IoWarning size={150} />
      <div className="text-xl font-bold">Failed to load</div>
    </div>
  );
}
export default function SliderSkeleton() {
  return (
    <div className="slider-container flex w-[100%]">
      <div className="array-container">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="flex min-w-[70%] items-center justify-center md:min-w-[25%]"
          >
            <SliderError />
          </div>
        ))}
      </div>
    </div>
  );
}
