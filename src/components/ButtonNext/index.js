"use client";

import arrow from "/public/arrow.svg";
import Image from "next/image";

const ButtonNext = ({ setIndexModelBatik }) => {
  return (
    <button
      onClick={() =>
        setIndexModelBatik((n) => {
          return n > 3 ? (n = 0) : n + 1;
        })
      }
      className={`animate-pulse hover:animate-none transition duration-300`}
    >
      <Image src={arrow} alt="icon arrow" className="w-12" />
    </button>
  );
};

export default ButtonNext;
