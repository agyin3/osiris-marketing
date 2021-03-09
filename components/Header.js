import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-blue-900 w-screen p-1 shadow fixed">
        <div className="container mx-auto flex justify-between content-center">
          <Image
            src="/osiris_logo-GOLD(500x500).png"
            alt="Osiris Marketing Group Logo"
            width={75}
            height={75}
          />
          <nav className="md:w-2/12 text-white content-center justify-between flex mr-2 md:mr-0">
            <Link href="#">
              <a className="self-center font-roboto font-bold md:m-0">
                Services
              </a>
            </Link>
            <Link href="#">
              <a className="self-center font-roboto font-bold md:m-0 ml-2">
                About
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
}
