import {
  IoCheckmarkDoneCircleSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";

export default function Cover() {
  return (
    <div className="slider-container flex w-full flex-col items-center justify-center gap-8">
      <div className="text-3xl font-bold">Christopher Juwao</div>
      <div className="text-3xl font-bold">Take Home Assignment</div>
      <div className="flex flex-row gap-4">
        <button
          className="flex h-16 w-48 items-center justify-center gap-2 rounded-lg bg-[#28a745] text-lg font-bold text-[#ffffff]"
          onClick={() => (window.location.href = "/successful")}
        >
          Successful <IoCheckmarkDoneCircleSharp size={30} />
        </button>
        <button
          className="flex h-16 w-48 items-center justify-center gap-2 rounded-lg bg-[#dc3545] text-lg font-bold text-[#ffffff]"
          onClick={() => (window.location.href = "/broken")}
        >
          Broken
          <IoCloseCircleSharp size={30} />
        </button>
      </div>
    </div>
  );
}
