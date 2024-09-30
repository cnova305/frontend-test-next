"use client";

import ParentLayout from "@/components/parent-layout";
import Slider from "@/components/slider";
import SliderError from "@/components/slider-error";
import SliderSkeleton from "@/components/slider-skeleton";
import { Speaker } from "@/types";
import { useEffect, useState } from "react";

export default function Broken() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const response = await fetch("/api/broken");

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to load");
        }

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

  if (loading)
    return (
      <ParentLayout>
        <SliderSkeleton />
      </ParentLayout>
    );

  if (error)
    return (
      <ParentLayout>
        <SliderError />
      </ParentLayout>
    );

  return (
    <ParentLayout>
      <Slider speakers={speakers} />
    </ParentLayout>
  );
}
