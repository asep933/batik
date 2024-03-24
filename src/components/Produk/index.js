import Card from "../Card";

const Produk = () => {
  return (
    <div
      id="produk"
      className="bg-primary text-fourth px-8 flex items-center justify-center"
    >
      <div className="flex items-center flex-col pt-16">
        <h2 className="text-4xl font-semibold w-full text-center">Produk</h2>

        <div className="pt-16 fkex">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Produk;
