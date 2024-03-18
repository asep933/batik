"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DaftarInformasi = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex justify-center py-16 px-24">
      <Informasi />
    </div>
  );
};

const Informasi = () => {
  return (
    <div
      className="stats stats-vertical lg:stats-horizontal"
      data-aos="zoom-in"
    >
      <div className="stat bg-secondary text-fourth">
        <div className="stat-title text-fourth">Karyawan</div>
        <div className="stat-value">31K</div>
      </div>

      <div className="stat bg-secondary text-fourth">
        <div className="stat-title text-fourth">Cabang</div>
        <div className="stat-value">38</div>
      </div>

      <div className="stat bg-secondary text-fourth">
        <div className="stat-title text-fourth">Penghargaan</div>
        <div className="stat-value">20</div>
      </div>
    </div>
  );
};

export default DaftarInformasi;
