import { IoPerson } from "react-icons/io5";
import CircularProgress from "./circular-progress";

function SliderSkeletonCard() {
  return (
    <div className="skeleton-color flex aspect-[12/16] min-w-[90%] flex-col items-center justify-center rounded-lg">
      <IoPerson size={150} />
      <CircularProgress />
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
            <SliderSkeletonCard />
          </div>
        ))}
      </div>
    </div>
  );
}
