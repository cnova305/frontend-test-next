import { SpeakerCardProps } from "@/types";
import Image from "next/image";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  speaker: SpeakerCardProps;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, speaker }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold">{speaker.name}</h2>
        <p className="text-sm text-gray-700">{speaker.company}</p>
        <Image src="/img1.png" alt={speaker.name} width={200} height={200} />
        <h3 className="mt-4 font-semibold">Topics:</h3>
        <ul className="list-disc list-inside">
          {speaker.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
