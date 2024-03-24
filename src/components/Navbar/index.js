"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "/public/logo.webp";

const NavbarComponent = () => {
  const [jasa, setJasa] = useState(false);
  const [animation, setAnimation] = useState({
    beranda: false,
    produk: false,
    layanan: false,
    kontak: false,
    masuk: false,
    daftar: false,
  });
  const [humberger, setHumberger] = useState(false);

  return (
    <>
      <div className="fixed w-full h-auto z-50">
        <div
          className="bg-secondary text-fourth flex justify-between 
        font-medium items-center"
        >
          <div className="text-3xl">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="image logo"
                className={`w-32 max-[820px]:w-28`}
              />
            </Link>
          </div>

          <div className="flex gap-x-8 mb-0 text-base mobile-menu">
            <div
              onMouseLeave={() => setAnimation({ beranda: false })}
              onMouseEnter={() => setAnimation({ beranda: true })}
            >
              <Link href={"/"}>Beranda</Link>
              <div
                className={`p-[2px] bg-third transition duration-300 ease-in-out ${
                  animation.beranda ? "w-full" : "w-0"
                } ${animation.beranda ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
            <div
              onMouseLeave={() => setAnimation({ produk: false })}
              onMouseEnter={() => setAnimation({ produk: true })}
            >
              <Link href={"#produk"}>Produk </Link>
              <div
                className={`p-[2px] bg-third transition duration-300 ease-in-out ${
                  animation.produk ? "w-full" : "w-0"
                } ${animation.produk ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
            <div
              onMouseOver={() => setJasa(true)}
              onMouseLeave={() => setAnimation({ layanan: false })}
              onMouseEnter={() => setAnimation({ layanan: true })}
            >
              <Link href={""}>
                Layanan <span>↓</span>
                <div
                  className={`p-[2px] bg-third transition duration-300 ease-in-out ${
                    animation.layanan ? "w-full" : "w-0"
                  } ${animation.layanan ? "opacity-100" : "opacity-0"}`}
                ></div>
              </Link>
            </div>
            <div
              onMouseLeave={() => setAnimation({ kontak: false })}
              onMouseEnter={() => setAnimation({ kontak: true })}
            >
              <Link href={"#footer"}>Kontak</Link>
              <div
                className={`p-[2px] bg-third transition duration-300 ease-in-out ${
                  animation.kontak ? "w-full" : "w-0"
                } ${animation.kontak ? "opacity-100" : "opacity-0"}`}
              ></div>
            </div>
          </div>

          <MasukDaftar animation={animation} setAnimation={setAnimation} />
          <Humberger humberger={humberger} setHumberger={setHumberger} />
        </div>

        {jasa && <MenuJasa setJasa={setJasa} jasa={jasa} />}
      </div>

      {humberger && (
        <div>
          <MenuMobile
            animation={animation}
            setAnimation={setAnimation}
            setJasa={setJasa}
            humberger={humberger}
            setHumberger={setHumberger}
          />
        </div>
      )}
    </>
  );
};

const MasukDaftar = ({ animation, setAnimation }) => {
  return (
    <div className="flex gap-x-8 mr-12 mobile-menu">
      <div
        onMouseLeave={() => setAnimation({ masuk: false })}
        onMouseEnter={() => setAnimation({ masuk: true })}
      >
        <Link href={"/loginPage"}>Masuk</Link>
        <div
          className={`p-[2px] bg-third transition duration-300 ease-in-out ${
            animation.masuk ? "w-full" : "w-0"
          } ${animation.masuk ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
      <div
        onMouseLeave={() => setAnimation({ daftar: false })}
        onMouseEnter={() => setAnimation({ daftar: true })}
      >
        <Link href={"/daftarPage"}>Daftar</Link>
        <div
          className={`p-[2px] bg-third transition duration-300 ease-in-out ${
            animation.daftar ? "w-full" : "w-0"
          } ${animation.daftar ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
};

// humberger
const Humberger = ({ humberger, setHumberger }) => {
  // const RefHumberger = useRef();

  // console.log("ini refHumberger", RefHumberger);

  // useEffect(() => {
  //   return () => RefHumberger.current.classList.toggle("swap", "swap-rotate");
  // }, []);

  return (
    <div className="hidden max-[820px]:block">
      <label className={`btn btn-circle mr-6`}>
        <input
          type="checkbox"
          onClick={() => setHumberger(!humberger)}
          className="hidden"
        />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
    </div>
  );
};

// menu mobile
const MenuMobile = ({ humberger, setHumberger }) => {
  const [layananMobile, setLayananMobile] = useState(false);

  return (
    <div
      className="flex flex-col gap-x-8 mb-0 pt-16 fixed top-16
    text-lg bg-secondary w-full z-20 items-center gap-y-4 text-fourth"
    >
      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-primary w-full p-3 text-center"
        href={"/"}
      >
        Beranda
      </Link>

      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-primary w-full p-3 text-center"
        href={"#produk"}
      >
        Produk{" "}
      </Link>

      <div
        onClick={() => setLayananMobile(!layananMobile)}
        onMouseLeave={() => setLayananMobile(false)}
        onMouseEnter={() => setLayananMobile(true)}
      >
        <Link href={""}>
          Layanan <span>↓</span>
        </Link>
        {layananMobile && (
          <div className="flex flex-col pl-4 pt-2">
            <Link
              className="hover:text-third"
              href={"#customs"}
              onClick={() => setHumberger(!humberger)}
            >
              Custom
            </Link>
            <Link
              className="hover:text-third"
              href={"#souvenir"}
              onClick={() => setHumberger(!humberger)}
            >
              Souvenir
            </Link>
            <Link
              className="hover:text-third"
              href={"#digital"}
              onClick={() => setHumberger(!humberger)}
            >
              Digital
            </Link>
            <Link
              className="hover:text-third"
              href={"#eksklusif"}
              onClick={() => setHumberger(!humberger)}
            >
              Eksklusif
            </Link>
          </div>
        )}
      </div>

      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-primary w-full p-3 text-center"
        href={"#footer"}
      >
        Kontak
      </Link>

      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-primary w-full p-3 text-center"
        href={"/loginPage"}
      >
        Masuk
      </Link>
      <Link
        onClick={() => setHumberger(!humberger)}
        className="hover:bg-primary w-full p-3 text-center"
        href={"/daftarPage"}
      >
        Daftar
      </Link>
    </div>
  );
};

const MenuJasa = ({ setJasa, jasa }) => {
  return (
    <div
      onMouseLeave={() => setJasa(false)}
      onMouseEnter={() => setJasa(true)}
      className="absolute bg-fourth text-primary w-full flex 
    justify-center gap-x-5"
    >
      <Link
        onClick={() => setJasa(!jasa)}
        className="hover:bg-secondary hover:text-fourth transition duration-300 ease-in-out p-3"
        href={"#customs"}
      >
        Costum
      </Link>
      <Link
        onClick={() => setJasa(!jasa)}
        className="hover:bg-secondary hover:text-fourth transition duration-300 ease-in-out p-3"
        href={"#souvenir"}
      >
        Souvenir
      </Link>
      <Link
        onClick={() => setJasa(!jasa)}
        className="hover:bg-secondary hover:text-fourth transition duration-300 ease-in-out p-3"
        href={"#digital"}
      >
        Digital
      </Link>
      <Link
        onClick={() => setJasa(!jasa)}
        className="hover:bg-secondary hover:text-fourth transition duration-300 ease-in-out p-3"
        href={"#eksklusif"}
      >
        Eksklusif
      </Link>
    </div>
  );
};

export default NavbarComponent;
