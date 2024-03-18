"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import batikCustom from "/public/batik-custom.webp";
import batikSouvenir from "/public/batik-souvenir.jpg";
import batikDigital from "/public/batik-digital.jpg";
import batikEksklusif from "/public/batik-eksklusif.jpg";
import ModalOrder from "../ModalOrder";

const Layanan = () => {
  const [statusModal, setStatusModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-primary pb-24 flex flex-col gap-y-4 w-full">
      <h1 className="text-4xl font-semibold text-fourth pb-12 w-full text-center">
        Layanan Kami
      </h1>
      <div
        className="w-full h-full flex gap-y-3 justify-center 
    flex-col items-center"
      >
        <div
          className="max-w-full grid grid-cols-2 gap-8 px-52 overflow-auto
        max-[820px]:grid-cols-1 max-[820px]:px-4"
        >
          <div id="customs">
            <CardLayanan
              batikImage={batikCustom}
              title={"Custom"}
              buttonModal={<ModalOrder />}
            />
          </div>
          <div id="souvenir">
            <CardLayanan
              batikImage={batikSouvenir}
              title={"Souvenir"}
              buttonModal={<ModalOrder />}
            />
          </div>
          <div id="digital">
            <CardLayanan
              batikImage={batikDigital}
              title={"Digital"}
              buttonModal={<ModalOrder />}
            />
          </div>
          <div id="eksklusif">
            <CardLayanan
              batikImage={batikEksklusif}
              title={"Eksklusif"}
              buttonModal={<ModalOrder />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardLayanan = ({ title, batikImage, buttonModal }) => {
  return (
    <div className="card min-w-16 bg-fourth shadow-xl" data-aos="zoom-in">
      <figure className="px-10 pt-10">
        <div className="overflow-hidden h-44">
          <Image
            src={batikImage}
            alt="image batik"
            width={200}
            className="rounded-xl object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="card-actions">
          {/* <button
            className="btn border-2 border-third bg-transparent hover:bg-third
          hover:text-fourth"
          >
            Checkout
          </button> */}
          {buttonModal}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
