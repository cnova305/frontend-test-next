import { SpeakerCardProps } from "@/types";
import SpeakerCard from "./speaker-card";

export default function Slider({ items }: { items: SpeakerCardProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <SpeakerCard
          key={item.name}
          name={item.name}
          company={item.company}
          image={item.image}
          topics={item.topics}
        />
      ))}
    </div>
  );
}
