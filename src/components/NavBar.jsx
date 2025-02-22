"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About-me",
    path: "#aboutme",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Collaborations",
    path: "#collabs",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border border-[#33353F] px-6">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 w-full">
        {/* Logo - Pushed Further Left on 2XL Screens */}
        <Link
          href={"/"}
          className="text-2xl md:text-3xl lg:text-5xl text-white font-semibold xl:ml-16 2xl:ml-24 3xl:ml-32"
        >
          Kirby's Portfolio
        </Link>

        {/* Mobile Menu Button (Visible on Medium Screens) */}
        <div className="mobile-menu md:block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Navbar Links - Hidden on Medium Screens, Pushed Further Right on Larger Screens */}
        <div className="menu hidden md:hidden lg:flex xl:mr-16 2xl:mr-24 3xl:mr-32">
          <ul className="flex p-4 lg:p-5 lg:flex-row lg:space-x-12 2xl:space-x-16 3xl:space-x-20">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay (Only Visible when navbar is open) */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
