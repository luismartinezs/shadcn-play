"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

function useProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(Math.random() * 100);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return progress;
}

export function DProgress({ stopped }: { stopped?: boolean }) {
  const progress = useProgress();

  return <Progress value={stopped ? 50 : progress} />;
}
