import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between px-18 py-4 items-center 
    bg-white/10 backdrop-blur-md ">
          <div className="font-semibold text-xl flex gap-2">
            <Image src={'/logo.svg'} alt="logo" width={23} height={23} />
            <h1>Monify</h1>
          </div>
          <div className="flex gap-7 font-medium font-stretch-50%">
            <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300" >Home</Link>
            <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300">About Us</Link>
            <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300">Blogs</Link>
            <Link href={'#'} className="hover:text-zinc-500 transition-colors duration-300">Contact Us</Link>
          </div>
          <button className="shadow-md hover:shadow-lg transition-all cursor-pointer rounded-xl px-4 py-3 border border-zinc-200 font-semibold">Get Started</button>
        </nav>
    )
}