"use client";

import Hero from "@/components/Hero";
import DaftarInformasi from "@/components/Informasi";
import Layanan from "@/components/Layanan";
import Motif from "@/components/Motif";
import Produk from "@/components/Produk";
import Testimoni from "@/components/Testimoni";

const Page = () => {
  return (
    <main className="bg-fourth overflow-auto">
      <Hero />
      <Layanan />
      <DaftarInformasi />
      <Produk />
      <Motif />
      <Testimoni />
    </main>
  );
};

export default Page;
