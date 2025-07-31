import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
      <div className="flex items-center justify-between max-w-[1500px] px-6 w-full mx-auto text-white">
        {/* Left: Logo */}
        <img src="/svg/izza.svg" alt="Logo" className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-8">
          <a
            href="#"
            className="text-lg font-semibold"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-lg font-semibold"
          >
            Family
          </a>
          <a
            href="#"
            className="text-lg font-semibold"
          >
            Find Us
          </a>
        </nav>

        {/* Right: Contact (hidden on small screens) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="flex flex-row items-center space-x-2 text-lg font-semibold"
          >
            <span className="text-lg font-semibold">Contact</span>
            <img
              src="/svg/phone-solid-full.svg"
              alt="Phone Icon"
              className="h-5 w-auto"
            />
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden p-4"
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-label="Open mobile menu"
        >
          <img src="/svg/cross.svg" alt="Close" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 p-4"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close mobile menu"
          >
            <img src="/svg/cross.svg" alt="Close" className="h-6 w-6" />
          </button>

          <nav className="flex flex-col space-y-8 text-white">
            <a
              href="#"
              className="p-6 text-2xl font-semibold"
              onClick={() => setMobileNavOpen(false)}
            >
              Menu
            </a>
            <a
              href="#"
              className="p-6 text-2xl font-semibold"
              onClick={() => setMobileNavOpen(false)}
            >
              Family
            </a>
            <a
              href="#"
              className="p-6 text-2xl font-semibold"
              onClick={() => setMobileNavOpen(false)}
            >
              Find Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
