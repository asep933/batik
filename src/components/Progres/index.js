"use client";

import { Progress } from "flowbite-react";
import { useEffect, useState } from "react";

const ProgresBar = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / trackLength) * 100;
      setValue(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value]);

  return (
    <>
      <Progress
        progress={value}
        color="cyan"
        size="sm"
        className="fixed z-[999]"
      />
    </>
  );
};

export default ProgresBar;
