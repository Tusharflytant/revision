"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="text-white  w-full shadow-md">
      <div className="  max-w-7xl mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="hover:cursor-pointer">
          <Image src="/logo-revision.png" alt="Logo" width={163} height={100} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-4 text-sm font-bold">
            <Link
              href="/lovestories"
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition"
            >
              LOVESTORIES
            </Link>
            <Link
              href="/relationship"
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition"
            >
              RELATIONSHIP
            </Link>
            <Link
              href="/love"
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition"
            >
              LOVE & LIFESTYLE
            </Link>
            <Link
              href="/dating"
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm  hover:bg-white/20 transition"
            >
              DATING
            </Link>
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex">
  <Link
    href="/contact"
    className="ml-4 px-6 py-2 font-bold rounded-lg text-white bg-black border
     border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
  >
    Contact
  </Link>
</div>


        {/* Mobile Hamburger */}
        <div className="lg:hidden hover:cursor-pointer text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-6 space-y-4 bg-black text-white shadow-md">
          <nav>
            <ul className="flex flex-col items-center space-y-7 text-base">
              <li>
                <Link
                  href="/lovestories"
                  onClick={handleCloseMenu}
                  className="px-4 py-2  rounded-full bg-white/10 backdrop-blur-sm font-bold  hover:bg-white/20 transition"
                >
                  LOVESTORIES
                </Link>
              </li>
              <li>
                <Link
                  href="/relationship"
                  onClick={handleCloseMenu}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm font-bold  hover:bg-white/20 transition"
                >
                  RELATIONSHIP
                </Link>
              </li>
              <li>
                <Link
                  href="/love"
                  onClick={handleCloseMenu}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm font-bold  hover:bg-white/20 transition"
                >
                  LOVE & LIFESTYLE
                </Link>
              </li>
              <li>
                <Link
                  href="/dating"
                  onClick={handleCloseMenu}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm font-bold  hover:bg-white/20 transition"
                >
                  DATING
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              onClick={handleCloseMenu}
              className="ml-4 px-6 py-2 font-bold rounded-lg text-white bg-black border
               border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
