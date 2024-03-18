"use client";

import { Card, Rating } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Pagination } from "flowbite-react";
import { useState } from "react";

const Testimoni = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-8 bg-fourth">
      <h1 className="text-4xl font-semibold w-full text-center">Testimoni</h1>
      <div className="px-8 py-8 grid grid-cols-3 gap-4 place-items-center max-[820px]:grid-cols-1">
        <CardTesti
          user={"septian"}
          komentar={
            "Saya sangat senang dengan hasil batik yang dibuat oleh jasa ini! Desainnya sangat indah dan detailnya luar biasa. Saya pasti akan merekomendasikan kepada teman dan keluarga saya. Terima kasih banyak!"
          }
          satu={true}
          dua={true}
          tiga={true}
          empat={false}
          lima={false}
        />
        <CardTesti
          user={"dani"}
          komentar={
            "Pelayanan dari jasa pembuatan batik ini sungguh memuaskan. Mereka sangat ramah dan responsif terhadap kebutuhan saya. Hasil batiknya juga sangat bagus! Sangat merekomendasikan untuk semua orang yang mencari batik berkualitas."
          }
          satu={true}
          dua={true}
          tiga={true}
          empat={true}
          lima={false}
        />
        <CardTesti
          user={"sandi"}
          komentar={
            "Wow! Saya benar-benar terkesan dengan keindahan batik yang dibuat oleh tim ini. Mereka sangat berbakat dalam menciptakan motif-motif yang unik dan menarik. Saya pasti akan menggunakan jasa mereka lagi di masa depan."
          }
        />
        <CardTesti
          user={"hani"}
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
      </div>
      <PaginationComponent />
    </div>
  );
};

const CardTesti = ({ user, satu, dua, tiga, empat, lima, komentar }) => {
  return (
    <Card className="max-w-sm bg-secondary text-fourth" data-aos="zoom-in">
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

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex w-full justify-center overflow-x-auto max-[820px]:justify-center">
      <Pagination
        layout="navigation"
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default Testimoni;
