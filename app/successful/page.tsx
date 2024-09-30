"use client";

import ParentLayout from "@/components/parent-layout";
import Slider from "@/components/slider";
import SliderSkeleton from "@/components/slider-skeleton";
import { Speaker } from "@/types";
import { useEffect, useState } from "react";

export default function Successful() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const response = await fetch("/api/successful");
        const data = await response.json();
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

  if (error) return <div>Error: {error}</div>;

  if (loading)
    return (
      <ParentLayout>
        <SliderSkeleton />
      </ParentLayout>
    );

  return (
    <ParentLayout>
      <Slider speakers={speakers} />
    </ParentLayout>
  );
}
