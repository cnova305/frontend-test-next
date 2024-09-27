import { Speaker } from "@/types";

export default function SliderCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex h-full flex-col justify-end border border-green-500">
      <h2 className="text-4xl font-bold text-white">{speaker.name}</h2>
      <h3 className="text-3xl font-bold text-white">{speaker.company}</h3>
      <div className="flex space-x-1 py-3 md:space-x-4">
        {speaker.topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center justify-center rounded-full border border-white bg-white/10 px-2 text-xl font-medium text-white"
          >
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
