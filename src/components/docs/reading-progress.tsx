"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const calculate = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current = window.scrollY;

      setProgress(
        Math.min(
          100,
          (current / total) * 100
        )
      );
    };

    calculate();

    window.addEventListener(
      "scroll",
      calculate
    );

    return () =>
      window.removeEventListener(
        "scroll",
        calculate
      );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-green-500 z-50"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
