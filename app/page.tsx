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

export default function Home() {
  return (
    <>
      <div className="h-20 px-20 bg-background/90 flex justify-between items-center fixed top-0 left-0 right-0 border-b-2 border-foreground/20">
        <Link href={"#main"}>
          <Image src={"/logo.png"} alt="logo" width={200} height={50} />
        </Link>
        <nav className="flex ">
          <Link
            href={"#proyectos"}
            className="px-4 py-2 rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          >
            Proyectos
          </Link>
          <Link
            href={"#nosotros"}
            className="px-4 py-2 rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold"
          >
            Nosotros
          </Link>
          <Link
            href={"#contacto"}
            className="px-4 py-2 rounded-lg text-[#7b797a] hover:text-[#812962] transition-colors ease-linear duration-100 font-semibold "
          >
            Contacto
          </Link>
        </nav>
      </div>
      <section
        id="main"
        className="min-h-screen px-20 py-40 background1 flex flex-col justify-center items-center gap-5"
      >
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
          }
          className="fixed bottom-0 right-0 m-6 hover:opacity-70 transition-opacity ease-linear duration-100"
        >
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp Logo"
            width={70}
            height={70}
          />
        </Link>
        <div className="px-10 py-5 bg-background/90 w-[670px]">
          <h1 className="text-6xl font-bold text-center">
            EMPRENDIMIENTOS <br /> INMOBILIARIOS
          </h1>
          <p className="text-center font-bold text-2xl">
            EN LA PATAGONIA ARGENTINA
          </p>
        </div>
        <div className="px-10 py-5 bg-background/90 w-[670px]">
          <p className="text-center font-semibold text-2xl">
            Desarrollo de loteos abiertos, barrios cerrados, edificios, locales
            comerciales y departamentos
          </p>
        </div>
      </section>
      <section id="proyectos" className="min-h-screen px-20 py-[120px]">
        <h2 className="font-bold text-4xl uppercase mb-10">
          Nuestros Proyectos
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <div className="w-1/2 h-[400px] bg-foreground"></div>
            <div className="w-1/2 h-[400px] bg-foreground"></div>
          </div>
          <div className="flex gap-10">
            <div className="w-1/2 h-[400px] bg-foreground"></div>
            <div className="w-1/2 h-[400px] bg-foreground"></div>
          </div>
          <div className="flex gap-10">
            <div className="w-1/2 h-[400px] bg-foreground"></div>
            <div className="w-1/2 h-[400px] bg-foreground"></div>
          </div>
          <div className="flex gap-10">
            <div className="w-1/2 h-[400px] bg-foreground"></div>
            <div className="w-1/2 h-[400px] bg-foreground"></div>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        className="min-h-screen px-20 py-[120px] pb-[40px] background2 flex flex-col justify-center items-center gap-5"
      >
        <div className="bg-background/90 px-10 py-10 flex flex-col justify-center items-center w-[900px]">
          <h2 className="font-bold text-4xl uppercase mb-5">Contactanos</h2>
          <div className="flex flex-col gap-3">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdWhatsapp className="inline w-7 h-7 mb-1 mr-1" /> Escribinos por
              WhatsApp
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdOutlineMailOutline className="inline w-7 h-7 mb-1 mr-1" />{" "}
              Mandanos un Mail
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdPhone className="inline w-7 h-7 mb-1 mr-1" /> Llamanos
            </Link>
          </div>
        </div>
        <div className="bg-background/90 px-10 py-10 flex flex-col justify-center items-center w-[900px]">
          <h2 className="font-bold text-4xl uppercase mb-5">Horarios</h2>
          <div className="flex flex-col gap-3">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdOutlineCalendarMonth className="inline w-7 h-7 mb-1 mr-1" />{" "}
              Lunes a Viernes
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdOutlineAccessTime className="inline w-7 h-7 mb-1 mr-1" /> 9 a
              15 hs.
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B542944959344&text=Hola%2C+tengo+una+consulta%21&type=phone_number&app_absent=0"
              }
              className="font-semibold text-xl hover:text-[#812962] transition-colors ease-linear duration-100"
            >
              <MdLocationPin className="inline w-7 h-7 mb-1 mr-1" /> Palacios
              156 - 3° piso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
