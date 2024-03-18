"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ image }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center drop-shadow-md" data-aos="zoom-in">
      <div className="max-h-80 object-cover object-center overflow-hidden">
        <Image
          className="object-cover hover:scale-125 transition duration-300 ease-in-out"
          src={image}
          alt="image produk"
          width={300}
        />
      </div>
    </div>
  );
};

export default Card;
