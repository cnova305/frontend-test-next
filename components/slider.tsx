import { Speaker } from "@/types";
import React, { useState } from "react";
import Modal from "./modal";
import SpeakerCard from "./speaker-card";

export default function Slider({ speakers }: { speakers: Speaker[] }) {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakersLoop = [...speakers, ...speakers];

  const cardImage = (url: string): React.CSSProperties => ({
    backgroundImage: `url(${url})`,
  });

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
      <div className="slider-container flex w-max">
        <div
          className={` ${selectedSpeaker ? "paused" : "animate-scroll-infinite"} space-x-8`}
        >
          {speakersLoop.map((speaker, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(speaker)}
              style={cardImage(speaker.image)}
              className="speaker-card aspect-[12/16] min-w-[300px] cursor-pointer bg-cover bg-center p-4 md:min-w-[350px]"
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
