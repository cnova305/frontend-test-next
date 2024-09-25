import { SpeakerCardProps } from "@/types";
import Slider from "../components/slider";

const speakers: SpeakerCardProps[] = [
  {
    name: "Tim Cook",
    company: "Apple",
    image: "img1.png",
    topics: ["Business", "CEO", "Products"],
  },
  {
    name: "Susan Wojcicki",
    company: "Google",
    image: "img1.png",
    topics: ["Business", "CEO", "UX"],
  },
  {
    name: "Jack Dorsey",
    company: "Twitter",
    image: "img1.png",
    topics: ["Business", "CEO", "UX"],
  },
  {
    name: "Mark Zuckerberg",
    company: "Meta",
    image: "img1.png",
    topics: ["Business", "CEO", "UX"],
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Slider items={speakers} />
      </main>
    </div>
  );
}
