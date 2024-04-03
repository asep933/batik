import Image from "next/image";
import ModelSatu from "/public/model-batik-1.png";
import ModelDua from "/public/model-batik-2.png";
import ModelTiga from "/public/model-batik.png";

const ModelBatik = () => {
  return (
    <duv
      className="flex justify-between items-center h-auto w-full pt-16 
    px-16 space-x-8 max-[820px]:flex-col max-[820px]:px-4 
    max-[820px]:space-y-16 max-[820px]:pb-16"
    >
      <Image
        className="max-[820px]:w-72"
        data-aos="zoom-out"
        src={ModelSatu}
        alt="model image"
        width={350}
      />

      <div className="flex flex-col text-fourth space-y-6">
        <h2 className="text-4xl font-semibold" data-aos="zoom-in">
          Tentang Kami
        </h2>
        <p data-aos="fade-right">
          Batik Nasional adalah sebuah perusahaan yang berdedikasi untuk
          mempromosikan dan melestarikan warisan budaya Indonesia melalui seni
          batik. Sebagai produsen batik terkemuka, kami menghadirkan koleksi
          batik berkualitas tinggi yang menggabungkan desain modern dengan motif
          tradisional yang khas. Komitmen kami terhadap kualitas terwujud dalam
          setiap tahap produksi, mulai dari pemilihan bahan baku terbaik hingga
          proses pewarnaan dan finishing yang teliti. Kami juga memberdayakan
          para pengrajin lokal untuk menjaga keaslian teknik tradisional dalam
          pembuatan batik. Selain sebagai produsen, kami juga berperan dalam
          mengedukasi masyarakat tentang nilai-nilai budaya dan sejarah di balik
          batik. Melalui berbagai program sosial dan pendidikan, kami berusaha
          meningkatkan kesadaran akan pentingnya melestarikan warisan budaya ini
          untuk generasi mendatang.
        </p>
      </div>
    </duv>
  );
};

export default ModelBatik;
