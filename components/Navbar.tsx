'use client'
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { geistSans, manrope } from '@/fonts/font';
import { AnimatePresence, motion, useInView } from 'motion/react';
import TextBlurFade from './TextBlurFade';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileMenu = (
    <AnimatePresence>
      <motion.div
        className={`${geistSans.className} text-xl py-6 font-medium tracking-tight fixed top-14 left-0 right-0 flex flex-col gap-4 bg-white/20 backdrop-blur-md p-4 z-40 transition-all`}>
        <Link href={'/'} className="hover:text-zinc-500 transition-colors duration-300">
          <TextBlurFade spaceSplitting={false} text="Home" />
        </Link>
        <Link href={'/about'} className="hover:text-zinc-500 transition-colors duration-300">
          <TextBlurFade spaceSplitting={false} text="About Us" />
        </Link>
        <Link href={'/blog'} className="hover:text-zinc-500 transition-colors duration-300">
          <TextBlurFade spaceSplitting={false} text="Blogs" />
        </Link>
        <Link href={'/contact'} className="hover:text-zinc-500 transition-colors duration-300">
          <TextBlurFade spaceSplitting={false} text="Contact Us" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 md:px-12 lg:px-18 py-4 items-center bg-white/10 backdrop-blur-md">
        {/* Your existing navbar content */}
        <div className="font-semibold text-xl flex gap-2">
          <Image src={'/logo.svg'} alt="logo" width={23} height={23} />
          <h1 className={`${manrope.className} font-bold tracking-tight`}>Monify</h1>
        </div>
        <div className="hidden md:flex gap-7 font-medium font-stretch-50%">
          <Link href={'/'} className="hover:text-zinc-500 transition-colors duration-300">Home</Link>
          <Link href={'/about'} className="hover:text-zinc-500 transition-colors duration-300">About Us</Link>
          <Link href={'/blog'} className="hover:text-zinc-500 transition-colors duration-300">Blogs</Link>
          <Link href={'/contact'} className="hover:text-zinc-500 transition-colors duration-300">Contact Us</Link>
        </div>
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 p-2 md:hidden z-50"
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          aria-label="Toggle Menu"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              transition={{ duration: 0.3 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 9.423 L 20 9.423", opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>

        <button className="hidden md:flex shadow-md hover:shadow-lg bg-white transition-all cursor-pointer rounded-xl px-4 py-3 border border-zinc-200 font-semibold">
          Get Started
        </button>
      </nav>

      {/* Portal the mobile menu to body */}

      {mounted && menuOpen && createPortal(mobileMenu, document.body)}

    </>
  );
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);