"use client";

import Image from "next/image";
import model from "/public/model-batik.png";
import modelSatu from "/public/model-batik-1.png";
import modelDua from "/public/model-batik-2.png";
import modelTiga from "/public/model-batik-3.png";
import modelEmpat from "/public/model-batik-4.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ButtonNext from "../ButtonNext";
import ButtonPrev from "../ButtonPrev";

const Hero = () => {
  const modelBatik = [model, modelSatu, modelDua, modelTiga, modelEmpat];
  const [indexModelBatik, setIndexModelBatik] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndexModelBatik((n) => {
        return n > 3 ? (n = 0) : n + 1;
      });
    }, 2800);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-screen max-[820px]:h-auto bg-gradient-to-r from-[#07080a] to-primary">
      <div
        className={`h-full text-fourth pt-32 max-[820px]:pt:0 flex overflow-hidden 
      justify-around items-center bg-[url('/batik-motif.png')] bg-blend-overlay
       hero-mobile max-[820px]:flex-col max-[820px]:gap-y-10`}
      >
        <div className="absolute right-8 top-[50%]">
          <ButtonNext setIndexModelBatik={setIndexModelBatik} />
        </div>
        <div className="absolute left-8 top-[50%]">
          <ButtonPrev setIndexModelBatik={setIndexModelBatik} />
        </div>

        <section className="h-auto w-1/2 max-[820px]:w-full max-[820px]:px-4">
          <div
            className="max-[820px]:px-4 px-36 flex flex-col gap-y-6"
            data-aos="fade-in"
          >
            <h1 className="text-5xl font-bold">Batik Nasional</h1>

            <p>
              <span className="text-third text-sm font-medium">PERKENALAN</span>
              <br />
              Batik Nasional adalah sebuah perusahaan yang bergerak dibidang
              perancangan dan pembuatan batik, dimana batik yang dibuat berasal
              dari model batik berbagai daerah di Indonesia.
            </p>

            <Link
              href="#tentang"
              className="text-center bg-transparent border-fourth border-2 text-fourth 
              w-auto lg:w-1/2 max-[820px]:w-full hover:bg-third transition duration-300 
              delay-75 ease-out box-border"
            >
              <p className="font-medium inline-block">Selengkapnya</p>
            </Link>
          </div>
        </section>

        <div
          className="w-1/2 max-[820px]:w-full flex justify-center"
          data-aos="fade-in"
        >
          <Image
            data-aos="zoom-in"
            src={modelBatik[indexModelBatik]}
            alt="image model batik"
            width={300}
            className="transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
