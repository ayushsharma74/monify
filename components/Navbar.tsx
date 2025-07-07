'use client'
import { manrope } from "@/fonts/font";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between px-18 py-4 items-center 
    bg-white/10 backdrop-blur-md ">
      <div className="font-semibold text-xl flex gap-2">
        <Image src={'/logo.svg'} alt="logo" width={23} height={23} />
        <h1 className={`${manrope.className} font-bold tracking-tight`}>Monify</h1>
      </div>
      <div className="hidden md:flex gap-7 font-medium font-stretch-50%">
        <Link href={'/'} className="hover:text-zinc-500 transition-colors duration-300" >Home</Link>
        <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300">About Us</Link>
        <Link href={'/blog'} className="hover:text-zinc-500 transition-colors duration-300">Blogs</Link>
        <Link href={'/contact'} className="hover:text-zinc-500 transition-colors duration-300">Contact Us</Link>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
      {menuOpen && <div className="absolute top-full left-0 w-full flex flex-col gap-4 bg-black/20 backdrop-blur-xl p-4 z-40">

        <Link href={'/'} className="hover:text-zinc-500 transition-colors duration-300" >Home</Link>
        <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300">About Us</Link>
        <Link href={'/blog'} className="hover:text-zinc-500 transition-colors duration-300">Blogs</Link>
        <Link href={'/contact'} className="hover:text-zinc-500 transition-colors duration-300">Contact Us</Link>
      </div>}
      <button className="hidden md:flex shadow-md hover:shadow-lg bg-white transition-all cursor-pointer rounded-xl px-3 py-2 border border-zinc-200 font-semibold">Get Started</button>
    </nav>
  )
}