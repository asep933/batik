"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tentang = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-auto" id="tentang">
      <div
        className="bg-primary px-8 flex items-center text-fourth py-16
      flex-col justify-center gap-y-8 h-screen"
      >
        <h2 className="text-4xl font-semibold" data-aos="zoom-in">
          Tentang Kami
        </h2>

        <div className="px-52 max-[820px]:px-4 text-base" data-aos="zoom-in">
          <p>
            Batik Nasional adalah sebuah perusahaan yang berdedikasi untuk
            mempromosikan dan melestarikan warisan budaya Indonesia melalui seni
            batik. Sebagai produsen batik terkemuka, kami menghadirkan koleksi
            batik berkualitas tinggi yang menggabungkan desain modern dengan
            motif tradisional yang khas. Komitmen kami terhadap kualitas
            terwujud dalam setiap tahap produksi, mulai dari pemilihan bahan
            baku terbaik hingga proses pewarnaan dan finishing yang teliti. Kami
            juga memberdayakan para pengrajin lokal untuk menjaga keaslian
            teknik tradisional dalam pembuatan batik. Selain sebagai produsen,
            kami juga berperan dalam mengedukasi masyarakat tentang nilai-nilai
            budaya dan sejarah di balik batik. Melalui berbagai program sosial
            dan pendidikan, kami berusaha meningkatkan kesadaran akan pentingnya
            melestarikan warisan budaya ini untuk generasi mendatang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
