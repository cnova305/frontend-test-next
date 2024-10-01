import { Speaker } from "@/types";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const cardImage = (url: string): React.CSSProperties => ({
    backgroundImage: `url(${url})`,
  });

  return (
    <div
      style={cardImage(speaker.image)}
      className="aspect-[12/16] min-w-[90%] bg-cover bg-center"
    >
      <div className="flex h-full flex-col items-center justify-end">
        <div className="w-[90%] pb-6">
          <h2 className="text-3xl font-bold text-white">{speaker.name}</h2>
          <h3 className="text-2xl font-bold text-white">{speaker.company}</h3>
          <div className="flex w-[80%] pt-2">
            {speaker.topics.map((topic) => (
              <div
                key={topic}
                className="border-white-500 mr-4 flex min-w-[20%] items-center justify-center rounded-full border p-1"
              >
                <div className="text-md space-x-2 text-white">{topic}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
