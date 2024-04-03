"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BannerCarousel from "../BannerCarousel";
import Link from "next/link";
import Image from "next/image";
import AsteroidElement from "/public/asteroid.svg";
import ModelBatik from "../ModelBatik";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="relative h-auto max-[820px]:h-auto bg-gradient-to-r 
    from-[#07080a] to-primary pt-16"
    >
      <div className="bg-[url('/batik-motif.png')]">
        <Asteroid />
        <BannerCarousel />
        <ModelBatik />
      </div>
    </div>
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
