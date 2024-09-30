import { IoCloseSharp } from "react-icons/io5";

import { Speaker } from "@/types";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, speaker }) => {
  const cardImage = (url: string): React.CSSProperties => ({
    backgroundImage: `url(${url})`,
  });

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-auto flex w-[300px] flex-col gap-4 rounded-lg bg-white p-6 shadow-lg md:w-[500px] md:flex-row lg:w-[900px]">
        <div
          style={cardImage(speaker.image)}
          className="aspect-[12/16] min-w-[250px] bg-cover bg-center p-4 md:min-w-[350px]"
        ></div>
        <div className="flex w-full flex-col justify-between">
          <div className="hidden justify-end p-6 text-white md:flex">
            <button className="bg-[#dc3545]" onClick={onClose}>
              <IoCloseSharp size={35} />
            </button>
          </div>
          <div className="flex flex-col justify-items-end gap-2">
            <h2 className="text-4xl font-bold text-black">{speaker.name}</h2>
            <h3 className="text-3xl font-bold text-black">{speaker.company}</h3>
            <div className="flex space-x-1 md:space-x-4">
              {speaker.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-center rounded-full border border-black bg-black/10 p-2 text-xl font-medium text-black"
                >
                  <span>{topic}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center pt-6 md:hidden">
              <button
                className="flex items-center justify-center bg-[#dc3545] text-white"
                onClick={onClose}
              >
                <IoCloseSharp size={35} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
