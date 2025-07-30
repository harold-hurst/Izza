import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full flex items-center justify-between h-20 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center max-w-[1500px] px-6 w-full mx-auto text-white">
        {/* Left: Logo */}
        <img src="/svg/izza.svg" alt="Logo" className="h-10 w-auto" />

        {/* Center: Navigation */}
        <nav className="flex-1 flex justify-center space-x-8">
          <a
            href="#"
            className=" text-lg font-semibold hover:text-green-400 transition"
          >
            Menu
          </a>
          <a
            href="#"
            className=" text-lg font-semibold hover:text-green-400 transition"
          >
            Family
          </a>
          <a
            href="#"
            className=" text-lg font-semibold hover:text-green-400 transition"
          >
            Find Us
          </a>
        </nav>

        {/* Right: Contact */}
        <div className="flex items-center space-x-2">
          <span className=" text-lg font-semibold">Contact</span>
          {/* Phone SVG */}
          <img
            src="/svg/phone-solid-full.svg"
            alt="Phone Icon"
            className="h-5 w-auto"
          />
        </div>
      </div>
    </header>
  );
}
