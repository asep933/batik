import Image from "next/image";
import Logo from "/public/logo.webp";

const TentangPerusahaan = () => {
  return (
    <div className="flex flex-col w-1/2 space-y-4 max-[820px]:w-full">
      <Image src={Logo} alt="logo batik nasional" width={200} />

      <p>
        Batik Nasional adalah sebuah perusahaan yang berdedikasi untuk
        mempromosikan dan melestarikan warisan budaya Indonesia melalui seni
        batik. Sebagai produsen batik terkemuka, kami menghadirkan koleksi batik
        berkualitas tinggi yang menggabungkan desain modern dengan motif
        tradisional yang khas.
      </p>
    </div>
  );
};

export default TentangPerusahaan;
