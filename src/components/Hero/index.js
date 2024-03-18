"use client";

import Image from "next/image";
import model from "/public/model-batik.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-screen max-[820px]:h-auto bg-gradient-to-r from-[#07080a] to-primary">
      <div
        className="h-full text-fourth pt-32 max-[820px]:pt:0 flex overflow-hidden 
      justify-around items-center bg-[url('/batik-motif.png')] bg-blend-overlay
       hero-mobile max-[820px]:flex-col max-[820px]:gap-y-10"
      >
        <section className="h-auto w-1/2 max-[820px]:w-full max-[820px]:px-4">
          <div
            className="max-[820px]:px-4 px-36 flex flex-col gap-y-8"
            data-aos="fade-in"
          >
            <h1 className="text-5xl font-bold">Batik Nasional</h1>

            <p>
              Batik Nasional adalah sebuah perusahaan yang bergerak dibidang
              perancangan dan pembuatan batik, dimana batik yang dibuat berasal
              dari model batik berbagai daerah di Indonesia.
            </p>

            <Link
              href="#tentang"
              className="block text-center bg-transparent border-fourth border-2 text-fourth 
              w-1/3 max-[820px]:w-full hover:bg-third transition duration-300 
              delay-75 ease-out"
            >
              Selengkapnya
            </Link>
          </div>
        </section>

        <div
          className="w-1/2 max-[820px]:w-full flex justify-center"
          data-aos="fade-in"
        >
          <Image src={model} alt="image model batik" width={300} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
