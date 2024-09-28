import { IoPerson } from "react-icons/io5";
import CircularProgress from "./circular-progress";

export default function SliderSkeleton() {
  return (
    <div className="slider-container flex w-max justify-between">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="flex aspect-[12/16] min-w-[375px] flex-col items-center justify-center p-10 shadow-xl"
        >
          <IoPerson color="gray" size={200} />
          <CircularProgress />
        </div>
      ))}
    </div>
  );
}
