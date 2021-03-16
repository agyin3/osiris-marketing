import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="bg-blue-900 w-screen px-2 shadow fixed">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/osiris_logo-GOLD(500x500).png"
            alt="Osiris Marketing Group Logo"
            width={75}
            height={75}
          />
          {/* Hamburger Menu */}
          <div onClick={handleClick} className="flex flex-col w-10 md:hidden">
            <div className="h-1 bg-white mb-1 rounded"></div>
            <div className="h-1 bg-white mb-1 rounded"></div>
            <div className="h-1 bg-white mb-1 rounded"></div>
          </div>
          {/* Mobile Menu */}
          <nav
            className={`fixed overflow-x-hidden right-0 top-0 flex flex-col h-screen bg-black pt-8 transition-all ${
              showMenu === true ? "px-8 w-auto" : "px-0 w-0"
            }`}
          >
            <a href="#" className="text-3xl" onClick={handleClick}>
              &times;
            </a>
            <Link href="#">
              <a className="font-roboto font-bold md:m-0 text-2xl">Services</a>
            </Link>
            <Link href="#">
              <a className="font-roboto font-bold md:m-0 text-2xl">About</a>
            </Link>
          </nav>
          {/* Desktop Menu */}
          <nav className="hidden md:w-2/12 text-white content-center justify-between md:flex mr-2 md:mr-0">
            <Link href="#">
              <a className="font-roboto font-bold md:m-0">Services</a>
            </Link>
            <Link href="#">
              <a className="font-roboto font-bold md:m-0 ml-2">About</a>
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-16"></div>
    </>
  );
}
