"use client";

import Hero from "@/components/Hero";
import DaftarInformasi from "@/components/Informasi";
import Layanan from "@/components/Layanan";
import Motif from "@/components/Motif";
import Produk from "@/components/Produk";
import Tentang from "@/components/Tentang";
import Testimoni from "@/components/Testimoni";

const Page = () => {
  return (
    <main className="bg-fourth overflow-auto">
      <Hero />
      <Tentang />
      <Layanan />
      <DaftarInformasi />
      <Produk />
      <Motif />
      <Testimoni />
    </main>
  );
};

export default Page;
