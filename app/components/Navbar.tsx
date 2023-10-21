import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  <div className="h-20 px-20 bg-gray-300/75 flex justify-between items-center fixed top-0 left-0 right-0">
    <Image src={"/logo.png"} alt="logo" width={200} height={50} />
    <nav className="flex ">
      <Link
        href={"#proyectos"}
        className="px-4 py-2 rounded-lg hover:opacity-50 transition-opacity ease-linear duration-100"
      >
        Proyectos
      </Link>
      <Link
        href={"#nosotros"}
        className="px-4 py-2 rounded-lg hover:opacity-50 transition-opacity ease-linear duration-100"
      >
        Nosotros
      </Link>
      <Link
        href={"#contacto"}
        className="px-4 py-2 rounded-lg hover:opacity-50 transition-opacity ease-linear duration-100"
      >
        Contacto
      </Link>
    </nav>
  </div>;
}
