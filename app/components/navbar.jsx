"use client";

import Link from "next/link";
import { CalendarRange, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-black text-xl sm:text-3xl font-bold">
            Surendra 🧑‍💻
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-black hover:text-gray-600"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 bg-white md:bg-transparent md:relative md:flex md:items-center`}
        >
          <ul className="flex w-full flex-col items-center space-y-4 py-4 md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:py-0">
            <li>
              <Link
                className="block px-3 py-2 no-underline outline-none hover:no-underline"
                href="/#customers"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-gray-600 transition-colors duration-300 hover:text-black">
                  CUSTOMERS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-3 py-2 no-underline outline-none hover:no-underline"
                href="/#ourwork"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-gray-600 transition-colors duration-300 hover:text-black">
                  OUR WORK
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-3 py-2 no-underline outline-none hover:no-underline"
                href="/#whyus"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-sm text-gray-600 transition-colors duration-300 hover:text-black">
                  Why Us
                </div>
              </Link>
            </li>
            <li className="w-full md:w-auto px-3 md:px-0 md:ml-2">
              <Link
                className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105"
                href="https://calendly.com/surendrapandar/30min"
                onClick={() => setIsMenuOpen(false)}
              >
                <CalendarRange className="text-white text-lg" />
                <span className="text-white text-base font-semibold">
                  Let&apos;s Build
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
