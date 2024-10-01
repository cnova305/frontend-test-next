"use client";

import { Speaker } from "@/types";
import React, { Suspense, useEffect, useState } from "react";

// Lazily load the components
const ParentLayout = React.lazy(() => import("@/components/parent-layout"));
const Slider = React.lazy(() => import("@/components/slider"));
const SliderError = React.lazy(() => import("@/components/slider-error"));
const SliderSkeleton = React.lazy(() => import("@/components/slider-skeleton"));

export default function Successful() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const response = await fetch("/api/successful");

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
      <Suspense fallback={<div>Loading layout...</div>}>
        <ParentLayout>
          <Suspense fallback={<div>Loading slider skeleton...</div>}>
            <SliderSkeleton />
          </Suspense>
        </ParentLayout>
      </Suspense>
    );

  if (error)
    return (
      <Suspense fallback={<div>Loading layout...</div>}>
        <ParentLayout>
          <Suspense fallback={<SliderSkeleton />}>
            <SliderError errorMessage={error} />
          </Suspense>
        </ParentLayout>
      </Suspense>
    );

  return (
    <Suspense fallback={<div>Loading layout...</div>}>
      <ParentLayout>
        <Suspense fallback={<SliderSkeleton />}>
          <Slider speakers={speakers} />
        </Suspense>
      </ParentLayout>
    </Suspense>
  );
}
