"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import batikSatu from "/public/batik-1.png";
import batikDua from "/public/batik-2.jpg";
import batikTiga from "/public/batik-3.jpg";
import batikEmpat from "/public/batik-4.jpg";

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center drop-shadow-md" data-aos="zoom-in">
      <CarouselProduct />
    </div>
  );
};

const CarouselProduct = () => {
  return (
    <div className="w-full px-52 max-[820px]:px-0">
      <div className="carousel carousel-end rounded-box min-w-full flex">
        <div className="carousel-item">
          <Image
            className="object-cover "
            src={batikSatu}
            alt="image produk"
            width={250}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="object-cover "
            src={batikDua}
            alt="image produk"
            width={250}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="object-cover "
            src={batikTiga}
            alt="image produk"
            width={250}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="object-cover "
            src={batikEmpat}
            alt="image produk"
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
