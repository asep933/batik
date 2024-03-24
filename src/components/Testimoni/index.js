"use client";

import { Card, Rating } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import arrow from "/public/arrow.svg";

const Testimoni = () => {
  const RefTesti = useRef(null);

  // useEffect(() => {
  //   return () =>
  //     setInterval(() => {
  //       RefTesti.current.scrollLeft += 1;
  //     }, 10);
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-8 bg-fourth relative">
      <h1 className="text-4xl font-semibold w-full text-center">Testimoni</h1>

      <div
        ref={RefTesti}
        className="px-8 py-8 flex justify-start items-center gap-4 
      max-[820px]:flex overflow-hidden max-w-full"
      >
        <CardTesti
          user={"sandi"}
          komentar={
            "Pengalaman saya dengan jasa pembuatan batik ini sungguh luar biasa. Mereka sangat profesional dan teliti dalam setiap tahap pembuatan batik. Saya sangat puas dengan hasilnya dan tidak sabar untuk memakainya"
          }
        />
        <CardTesti
          user={"rina"}
          ratingRina={false}
          komentar={
            "Kualitas batik yang dihasilkan oleh jasa ini sungguh tidak terbantahkan. Saya merasa bangga bisa memiliki batik dengan desain yang begitu eksklusif. Terima kasih banyak atas pelayanan dan kerja kerasnya"
          }
        />
        <CardTesti
          user={"yuni"}
          komentar={
            "Inovasi dan kreativitas dari jasa pembuatan batik ini sungguh mengagumkan. Mereka tidak hanya menghasilkan batik yang cantik, tetapi juga memberikan sentuhan modern yang segar."
          }
          satu={true}
          dua={true}
          tiga={true}
          empat={true}
          lima={false}
        />
        <CardTesti
          user={"rifan"}
          komentar={
            "Inovasi dan kreativitas dari jasa pembuatan batik ini sungguh mengagumkan. Mereka tidak hanya menghasilkan batik yang cantik, tetapi juga memberikan sentuhan modern yang segar."
          }
          satu={true}
          dua={true}
          tiga={true}
          empat={true}
          lima={false}
        />
        <CardTesti
          user={"yudi"}
          komentar={
            "Inovasi dan kreativitas dari jasa pembuatan batik ini sungguh mengagumkan. Mereka tidak hanya menghasilkan batik yang cantik, tetapi juga memberikan sentuhan modern yang segar."
          }
          satu={true}
          dua={true}
          tiga={true}
          empat={true}
          lima={false}
        />

        <PaginationComponent RefTesti={RefTesti} />
      </div>
    </div>
  );
};

const CardTesti = ({ user, satu, dua, tiga, empat, lima, komentar }) => {
  return (
    <Card
      className="w-96 max-[820px]:w-64 bg-secondary text-fourth flex-shrink-0"
      data-aos="zoom-in"
    >
      <h5 className="text-2xl font-bold tracking-tight text-fourth dark:text-white">
        {user}
      </h5>
      <p className="font-normal text-fourth dark:text-gray-400">{komentar}</p>

      <Rating>
        <Rating.Star filled={satu} />
        <Rating.Star filled={dua} />
        <Rating.Star filled={tiga} />
        <Rating.Star filled={empat} />
        <Rating.Star filled={lima} />
      </Rating>
    </Card>
  );
};

const PaginationComponent = ({ RefTesti }) => {
  return (
    <>
      <div className="bg-third absolute top-[50%] left-2 rounded-md bg-opacity-75">
        <PrevTesti RefTesti={RefTesti} />
      </div>
      <div className="bg-third absolute top-[50%] right-2 rounded-md bg-opacity-75">
        <NextTesti RefTesti={RefTesti} />
      </div>
    </>
  );
};

const NextTesti = ({ RefTesti }) => {
  return (
    <button
      onClick={() => (RefTesti.current.scrollLeft += 250)}
      className="animate-pulse transition duration-300"
    >
      <Image src={arrow} alt="icon arrow" className="w-12" />
    </button>
  );
};

const PrevTesti = ({ RefTesti }) => {
  return (
    <button
      onClick={() => (RefTesti.current.scrollLeft -= 250)}
      className="animate-pulse transition duration-300"
    >
      <Image src={arrow} alt="icon arrow" className="w-12 rotate-180" />
    </button>
  );
};

export default Testimoni;
