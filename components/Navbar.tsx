"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const handleScroll = () => {
  const nextSection = document.getElementById("discover");

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2 bg-slate-900">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
      </Link>

      <CustomButton
        title="Search"
        containerStyles="bg-sky-500 text-green-900 rounded-full"
        handleClick={handleScroll}
      />
    </nav>
  </header>
);

export default NavBar;
