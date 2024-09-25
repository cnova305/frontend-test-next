"use client";

import { SpeakerCardProps } from "@/types";
import { useState } from "react";
import Modal from "./modal";
import SpeakerCard from "./speaker-card";

export default function Slider({ items }: { items: SpeakerCardProps[] }) {
  const [viewSpeaker, setViewSpeaker] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] =
    useState<SpeakerCardProps | null>(null);

  const handleViewSpeaker = (speaker: SpeakerCardProps) => {
    setSelectedSpeaker(speaker);
    setViewSpeaker(true);
  };

  const handleCloseModal = () => {
    setViewSpeaker(false);
    setSelectedSpeaker(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <SpeakerCard
            key={item.name}
            name={item.name}
            company={item.company}
            image={item.image}
            topics={item.topics}
            onClick={() => handleViewSpeaker(item)}
          />
        ))}
      </div>

      <Modal
        isOpen={viewSpeaker}
        onClose={handleCloseModal}
        speaker={selectedSpeaker!}
      />
    </>
  );
}
