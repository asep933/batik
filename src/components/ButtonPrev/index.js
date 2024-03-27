import arrow from "/public/arrow.svg";
import Image from "next/image";

const ButtonPrev = ({ setIndexModelBatik }) => {
  return (
    <button
      onClick={() =>
        setIndexModelBatik((n) => {
          return n < 1 ? (n = 4) : n - 1;
        })
      }
      className={`z-50 animate-pulse hover:animate-none transition
      duration-300 max-[820px]:hidden`}
    >
      <Image src={arrow} alt="icon arrow" className="w-12 rotate-180" />
    </button>
  );
};

export default ButtonPrev;
