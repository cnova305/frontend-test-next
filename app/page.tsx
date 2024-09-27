"use client";

import Slider from "@/components/slider";
import { Speaker } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const response = await fetch("/api/speakers");
        const data = await response.json();
        console.log("data", data);
        setSpeakers(data.speakers || []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchSpeakers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border-white-500 flex h-screen w-screen flex-col items-center justify-center border">
      <div className="container flex gap-4 overflow-hidden border border-red-500">
        <Slider speakers={speakers} />
      </div>
    </div>
  );
}
