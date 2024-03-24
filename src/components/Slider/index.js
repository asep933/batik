"use client";

import Image from "next/image";
import motifSatu from "/public/motif-1.jpg";
import motifDua from "/public/motif-2.jpg";
import motifTiga from "/public/motif-3.jpg";
import motifEmpat from "/public/motif-4.jpg";
import motifLima from "/public/motif-5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="carousel max-h-80 w-4/6 max-[820px]:w-full"
      data-aos="flip-left"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src={motifSatu}
          alt="image motif"
          className="w-full bg-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src={motifDua}
          alt="image motif"
          className="w-full bg-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src={motifTiga}
          alt="image motif"
          className="w-full bg-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src={motifEmpat}
          alt="image motif"
          className="w-full bg-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src={motifLima}
          alt="image motif"
          className="w-full bg-cover hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
