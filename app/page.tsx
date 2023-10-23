"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MdWhatsapp,
  MdOutlineMailOutline,
  MdLocationPin,
  MdPhone,
  MdOutlineCalendarMonth,
  MdOutlineAccessTime,
} from "react-icons/md";
import { GiLightBulb, GiWorld, GiAlliedStar, GiTeamIdea } from "react-icons/gi";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    setAnimate(!animate);
  };

  const handleLinkClick = () => {
    setIsActive(false);
    setAnimate(!animate);
  };
  return (
    <>
      <header className="h-20 px-5 lg:px-20 bg-background/90 flex justify-between items-center fixed top-0 left-0 right-0 border-b-2 border-foreground/20 z-50">
        <Link href={"#main"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={50}
            className="w-[150px] md:w-[200px]"
          />
        </Link>
        <nav className="gap-8 hidden md:flex">
          <Link
            href={"#proyectos"}
            className=" rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          >
            Proyectos
          </Link>
          <Link
            href={"#nosotros"}
            className="rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          >
            Nosotros
          </Link>
          <Link
            href={"#contacto"}
            className="rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold "
          >
            Contacto
          </Link>
        </nav>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <div className={`bar1 ${animate ? "firstAnimateBar1" : ""}`}></div>
          <div className={`bar2 ${animate ? "firstAnimateBar2" : ""}`}></div>
          <div className={`bar3 ${animate ? "firstAnimateBar3" : ""}`}></div>
        </div>
      </header>
      <nav className={`mobile-nav ${isActive ? "active" : ""} gap-5`}>
        <Link
          href={"#proyectos"}
          className=" rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          onClick={handleLinkClick}
        >
          Proyectos
        </Link>
        <Link
          href={"#nosotros"}
          className="rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          onClick={handleLinkClick}
        >
          Nosotros
        </Link>
        <Link
          href={"#contacto"}
          className="rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold "
          onClick={handleLinkClick}
        >
          Contacto
        </Link>
      </nav>
      <section
        id="main"
        className="min-h-screen px-5 lg:px-20 py-40 background1 flex flex-col justify-center items-center gap-5"
      >
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
          }
          className="fixed bottom-0 right-0 m-3 md:m-6 hover:opacity-70 transition-opacity ease-linear duration-100 z-50"
        >
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp Logo"
            width={70}
            height={70}
            className="w-[50px] md:w-[70px]"
          />
        </Link>
        <div className="px-5 md:px-10 py-5 bg-background/90 w-full max-w-[375px] sm:max-w-[433px] md:max-w-[670px]">
          <h1 className=" text-2xl sm:text-4xl md:text-6xl font-bold text-center">
            EMPRENDIMIENTOS <br /> INMOBILIARIOS
          </h1>
          <p className="text-center font-bold text-base sm:text-lg md:text-2xl">
            EN LA PATAGONIA ARGENTINA
          </p>
        </div>
        <div className="px-5 py-5 bg-background/90 w-full max-w-[375px] sm:max-w-[433px] md:max-w-[670px]">
          <p className="text-center font-semibold text-base sm:texl-lg md:text-2xl">
            Desarrollo de loteos abiertos, barrios cerrados, edificios, locales
            comerciales y departamentos
          </p>
        </div>
      </section>
      <section id="proyectos" className="min-h-screen px-5 lg:px-20 py-[120px]">
        <h2 className="font-bold text-2xl md:text-4xl uppercase mb-5 md:mb-10 text-center md:text-start">
          Nuestros Proyectos
        </h2>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/2 h-[400px] proyecto1 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center ">
                  LA AGUADA
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Departamentos
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  3 unidades disponibles
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[400px] proyecto2 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  BUSTILLO UNO
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Departamentos
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  5 unidades disponibles
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/2 h-[400px] proyecto3 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xll mb-2 text-center">
                  BELLA VISTA
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Departamentos
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  2 unidades disponibles
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] proyecto4 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  LOMAS DEL CAUQUEN
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Barrio abierto
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  10 lotes disponibles
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/2 h-[400px] proyecto5 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  LAS PITRAS
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Barrio abierto
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  1 lote disponible
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] proyecto6 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  BARILOCHE CENTER
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Departamentos
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  10 unidades disponibles
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/2 h-[400px] proyecto7 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  CARANTANIA
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Departamentos
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Sin lotes disponibles
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] proyecto8 flex flex-col justify-center items-center shadow-lg hover:-translate-y-1 hover:opacity-75 transition-all ease-linear hover:cursor-pointer">
              <div className="bg-background/90 py-5 px-10 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold text-xl md:text-2xl mb-2 text-center">
                  ENTRE CERROS
                </h4>
                <p className="text-xs md:text-sm font-semibold text-center">
                  Barrio abierto
                </p>
                <p className="text-xs md:text-sm font-semibold text-center">
                  4 lotes disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="nosotros"
        className="min-h-screen background2 px-5 lg:px-20 py-[120px] flex flex-col justify-center items-center gap-5"
      >
        <div className="bg-background/90 p-5 md:p-10  flex flex-col w-full max-w-[1100px]">
          <h2 className="font-bold text-2xl md:text-4xl uppercase mb-5">
            Quienes Somos
          </h2>
          <p className=" font-semibold text-sm md:text-xl">
            Somos una empresa que se dedica a realizar emprendimientos
            inmobiliarios.
          </p>
          <p className=" font-semibold text-sm md:text-xl">
            Nos caracterizamos por la calidad de nuestros diseños, la
            construcción y la constante innovación.
          </p>
        </div>
        <div className="bg-background/90 p-5 md:p-10  flex flex-col w-full max-w-[1100px]">
          <p className=" font-semibold text-sm md:text-xl">
            Nos esforzamos por alcanzar una visión de negocios que equilibre
            sustentabilidad y competitividad desarrollando loteos y
            urbanizaciones, proyectos residenciales, locales comerciales y
            oficinas.
          </p>
        </div>
        <div className="bg-background/90 p-5 md:p-10  flex flex-col  w-full max-w-[1100px]">
          <h3 className="font-bold text-base md:text-xl text-center mb-5 md:mb-7 uppercase">
            Nuestros valores
          </h3>
          <div className="grid grid-cols-2  md:flex  justify-between items-center gap-2 md:gap-5 md:px-20">
            <div className="flex flex-col justify-center items-center text-center font-semibold text-xs md:text-base">
              <GiLightBulb className="w-7 md:w-14  h-7 md:h-14 mb-2" />{" "}
              INNOVACIÓN
            </div>
            <div className="flex flex-col justify-center items-center text-center font-semibold text-xs md:text-base">
              <GiWorld className="w-7 md:w-14  h-7 md:h-14 mb-2" />{" "}
              RESPONSABILIDAD
            </div>
            <div className="flex flex-col justify-center items-center text-center font-semibold text-xs md:text-base">
              <GiTeamIdea className="w-7 md:w-14  h-7 md:h-14 mb-2" />{" "}
              COLABORACION
            </div>
            <div className="flex flex-col justify-center items-center text-center font-semibold text-xs md:text-base">
              <GiAlliedStar className="w-7 md:w-14  h-7 md:h-14 mb-2" />{" "}
              EXCELENCIA
            </div>
          </div>
        </div>
      </section>
      <section className="background3">
        <div
          id="contacto"
          className="min-h-screen px-5 md:px-20 py-[120px] pb-[40px]  flex flex-col justify-center items-center gap-5 "
        >
          <div className="bg-background/90 p-5 md:p-10 flex flex-col justify-center items-center w-full max-w-[900px]">
            <h2 className="font-bold text-2xl md:text-4xl uppercase mb-5">
              Contactanos
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
                }
                className="font-semibold text-sm md:text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
              >
                <MdWhatsapp className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                Escribinos por WhatsApp
              </Link>
              <Link
                href={""}
                className="font-semibold text-sm md:text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
              >
                <MdOutlineMailOutline className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                Mandanos un Mail
              </Link>
              <Link
                href={""}
                className="font-semibold text-sm md:text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
              >
                <MdPhone className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                Llamanos
              </Link>
            </div>
          </div>
          <div className="bg-background/90 p-5 md:p-10 flex flex-col justify-center items-center w-full max-w-[900px]">
            <h2 className="font-bold text-2xl md:text-4xl uppercase mb-5">
              Horarios
            </h2>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-sm md:text-xl ">
                <MdOutlineCalendarMonth className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                Lunes a Viernes
              </p>
              <p className="font-semibold text-sm md:text-xl ">
                <MdOutlineAccessTime className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                9 a 15 hs.
              </p>
              <p className="font-semibold text-sm md:text-xl ">
                <MdLocationPin className="inline w-5 h-5 md:w-7 md:h-7 mb-1 mr-1" />{" "}
                Palacios 156 - 3° piso
              </p>
            </div>
          </div>
        </div>
        <footer className="px-5 md:px-20 flex flex-col justify-center items-center py-5 relative bg-background/90 gap-20">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={150}
            height={25}
            className="absolute left-0 hidden md:flex md:left-0 ml-5  lg:ml-20 "
          />
          <p className="text-center text-xs md:text-sm">
            ©2023 Laura Fenoglio
            <br /> Todos los derechos reservados
          </p>
          {/* <div className="flex mb-[60px] md:mb-0">
            <div className="flex flex-col border-r-[0.5px] border-foreground">
              <Link
                href={""}
                className="text-xs md:text-sm pl-0 px-1 md:px-4 py-1"
              >
                <MdWhatsapp className="inline mb-0.5" /> WhatsApp
              </Link>
              <Link
                href={""}
                className="text-xs md:text-sm pl-0 px-1 md:px-4 py-1"
              >
                <MdOutlineMailOutline className="inline mb-0.5" />{" "}
                ejemplo@gmail.com
              </Link>
              <Link
                href={""}
                className="text-xs md:text-sm pl-0 px-1 md:px-4 py-1"
              >
                <MdPhone className="inline mb-0.5" /> +542944111111
              </Link>
            </div>
            <div className="flex flex-col  border-l-[0.5px] border-foreground">
              {" "}
              <Link
                href={""}
                className="text-xs md:text-sm pr-0 px-1 md:px-4 py-1"
              >
                <MdOutlineCalendarMonth className="inline mb-0.5" /> Lunes a
                Viernes
              </Link>
              <Link
                href={""}
                className="text-xs md:text-sm pr-0 px-1 md:px-4 py-1"
              >
                <MdOutlineAccessTime className="inline mb-0.5" /> 9 a 15 hs.
              </Link>
              <Link
                href={""}
                className="text-xs md:text-sm pr-0 px-1 md:px-4 py-1"
              >
                <MdLocationPin className="inline mb-0.5" /> Palacios 156 - 3°
                piso
              </Link>
            </div>
          </div> */}
        </footer>
      </section>
    </>
  );
}
4;
