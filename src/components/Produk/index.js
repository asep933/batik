import Card from "../Card";
import batikSatu from "/public/batik-1.png";
import batikDua from "/public/batik-2.jpg";
import batikTiga from "/public/batik-3.jpg";
import batikEmpat from "/public/batik-4.jpg";

const Produk = () => {
  return (
    <div
      id="produk"
      className="bg-primary text-fourth px-8 flex items-center justify-center"
    >
      <div className="flex items-center flex-col pt-16">
        <h2 className="text-4xl font-semibold w-full text-center">Produk</h2>

        <div className="grid grid-cols-2 py-16 gap-4">
          <Card image={batikSatu} />
          <Card image={batikDua} />
          <Card image={batikTiga} />
          <Card image={batikEmpat} />
        </div>
      </div>
    </div>
  );
};

export default Produk;
