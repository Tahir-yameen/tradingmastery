"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrolled =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrolled);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed right-4 top-0 h-full w-1 bg-gray-200 z-50">
      <div
        className="bg-green-500 w-full transition-all duration-150"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}