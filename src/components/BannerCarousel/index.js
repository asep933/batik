"use client";

import Image from "next/image";
import bannerSatu from "/public/banner-1.png";
import bannerDua from "/public/banner-2.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BannerCarousel = () => {
  // const route = useRouter();

  // console.log(document.documentElement.scrollY);

  // useEffect(() => {
  //   const clearTimeInterval = setInterval(() => {
  //     if (document.documentElement.scrollY > 0) {
  //       route.push("/");
  //     } else {
  //       route.push("/#banner2");
  //     }
  //   }, 4000);

  //   return () => clearInterval(clearTimeInterval);
  // }, []);

  // useEffect(() => {
  //   const clearTimeInterval = setInterval(() => {
  //     return route.push("/#banner1");
  //   }, 8000);

  //   return () => clearInterval(clearTimeInterval);
  // }, []);

  return (
    <div>
      <div className="relative carousel w-full h-[98vh] max-[820px]:h-[27vh] scroll-smooth">
        <div id="banner1" className="carousel-item relative w-full">
          <Image src={bannerDua} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#banner2" className="btn btn-circle animate-pulse">
              ❮
            </a>
            <a href="#banner2" className="btn btn-circle animate-pulse">
              ❯
            </a>
          </div>
        </div>
        <div id="banner2" className="carousel-item relative w-full">
          <Image src={bannerSatu} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#banner1" className="btn btn-circle animate-pulse">
              ❮
            </a>
            <a href="#banner1" className="btn btn-circle animate-pulse">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
