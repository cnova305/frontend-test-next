type SpeakerCardProps = {
  name: string;
  company: string;
  image: string;
  topics: string[];
};

export default function SpeakerCard({
  name,
  company,
  image,
  topics,
}: SpeakerCardProps) {
  return (
    <div className="flex flex-col justify-end w-full aspect-[12/16] rounded-2xl bg-[url('/img1.png')] bg-cover bg-center shadow-xl p-4">
      <h2 className="text-3xl font-bold text-white">{name}</h2>
      <h3 className="text-2xl font-bold text-white">{company}</h3>
      <div className="flex space-x-4 py-3 ">
        {topics.map((topic) => (
          <div
            key={topic}
            className="inline-flex items-center justify-center px-4 border border-white rounded-full text-sm font-medium text-white bg-white/10"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}
