"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BannerCarousel from "../BannerCarousel";
import Link from "next/link";
import Image from "next/image";
import AsteroidElement from "/public/asteroid.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="relative h-auto max-[820px]:h-auto bg-gradient-to-r 
    from-[#07080a] to-primary pt-16"
    >
      <Asteroid />
      <BannerCarousel />
      <CTA />
    </div>
  );
};

const CTA = () => {
  return (
    <Link
      href={"#tentang"}
      className="absolute btn btn-outline hover:text-white hover:bg-third bottom-28 left-16 
      max-[820px]:bottom-[25px]
      max-[820px]:left-4 max-[820px]:animate-none max-[820px]:scale-50 origin-left"
    >
      <p className="text-black">Selengkapnya</p>
    </Link>
  );
};

const Asteroid = () => {
  return (
    <div className="absolute top-32 left-[40rem] z-30 animate-bounce">
      <Image src={AsteroidElement} alt="image asteroid" width={50} />
    </div>
  );
};

export default Hero;
