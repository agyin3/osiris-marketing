import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [windowPos, setWindowPos] = useState(0);

  const handleScroll = () => {
    let pos = window.pageYOffset;
    setWindowPos(pos);
  };
  const toggleMenu = (evt) => {
    evt.preventDefault();
    setShowMenu(!showMenu);
  };

  const scrollToDiv = (targetEl) => {
    if (targetEl) {
      document.getElementById(targetEl).scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="bg-blue-900 w-screen px-2 shadow fixed z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/osiris_logo-GOLD(500x500).png"
            alt="Osiris Marketing Group Logo"
            width={75}
            height={75}
          />
          {/* Hamburger Menu */}
          <div onClick={toggleMenu} className="flex flex-col w-10 md:hidden">
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
            <a href="#" className="text-3xl" onClick={toggleMenu}>
              &times;
            </a>
            <Link href="#">
              <a
                onClick={() => scrollToDiv("details")}
                className="font-roboto font-bold md:m-0 text-2xl"
              >
                Why Us?
              </a>
            </Link>
            <Link href="#">
              <a
                onClick={() => scrollToDiv("services")}
                className="font-roboto font-bold md:m-0 text-2xl"
              >
                Services
              </a>
            </Link>
          </nav>
          {/* Desktop Menu */}
          <nav className="hidden md:w-2/12 text-white content-center justify-between md:flex mr-2 md:mr-0">
            <Link href="#">
              <a
                onClick={() => scrollToDiv("details")}
                className="font-roboto font-bold md:m-0"
              >
                Why Us?
              </a>
            </Link>
            <Link href="#">
              <a
                onClick={() => scrollToDiv("services")}
                className="font-roboto font-bold md:m-0 ml-2"
              >
                Services
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-16"></div>
      <div
        className={`animate z-40 cursor-pointer fixed top-85 left-90 ${
          windowPos > 0 ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => scrollToDiv()}
      >
        <FontAwesomeIcon
          icon={["fas", "chevron-circle-up"]}
          height="2rem"
          width="2rem"
          className="text-yellow"
        />
      </div>
    </>
  );
}
