import { Speaker } from "@/types";
import { useState } from "react";
import Modal from "./modal";
import SpeakerCard from "./speaker-card";

export default function Slider({ speakers }: { speakers: Speaker[] }) {
  const speakersLoop = [...speakers, ...speakers];
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleOpenModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setViewModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
    setViewModal(false);
  };

  return (
    <>
      <div className="slider-container flex w-[100%]">
        <div
          className={`${selectedSpeaker ? "paused" : "animate-scroll-infinite"}`}
        >
          {speakersLoop.map((speaker, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(speaker)}
              className="speaker-card flex min-w-[50%] items-center justify-center md:min-w-[25%]"
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
      {selectedSpeaker && (
        <Modal
          isOpen={viewModal}
          onClose={handleCloseModal}
          speaker={selectedSpeaker}
        />
      )}
    </>
  );
}
