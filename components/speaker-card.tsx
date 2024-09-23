import Image from "next/image";

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
    <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl">
      <h2 className="text-3xl font-bold text-[#171717]">{name}</h2>
      <h3 className="text-2xl font-bold text-[#171717]">{company}</h3>
      <Image
        className="w-48 h-48 rounded-2xl mx-auto my-4"
        src={image}
        alt={name}
        width={48}
        height={48}
      />
      {topics.map((topic) => (
        <p key={topic} className="text-2xl font-bold text-[#171717]">
          {topic}
        </p>
      ))}
    </div>
  );
}
