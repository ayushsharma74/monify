import { useState } from "react";
import { plusJakartaSans } from "@/fonts/font";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import TextBlurFade from "../TextBlurFade";

type Tabs = 'SMB' | 'PM' | 'ST' | 'INV';

export default function HeroSection() {
  const [tabState, setTabState] = useState<Tabs>('SMB');

  return (
    <section className="relative w-full ">
      <div className="min-h-screen max-w-6xl mx-auto flex items-center justify-center px-4">
        <div className="flex flex-col px-4 gap-6 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          {/* Title Text */}
          <div className={`${plusJakartaSans.className} font-bold`}>
            <div className="text-5xl  md:text-6xl lg:text-7xl tracking-tight">
              <TextBlurFade text="Take Control Of" spaceSplitting={true} />
            </div>
            <div className="text-5xl  md:text-6xl lg:text-7xl tracking-tight">
              <TextBlurFade text="Your Finances" spaceSplitting={true} />
            </div>
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm sm:text-base text-zinc-500 font-medium"
          >
            <p>Try a new, better way of building customer-facing</p>
            <p>integrations for SaaS products.</p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-row gap-4"
          >
            <button
              className="relative shadow-md hover:shadow-lg transition-all cursor-pointer rounded-xl hover:rounded-2xl px-6 py-3 bg-black text-white font-semibold flex gap-2 items-center justify-center overflow-hidden"
            >
              <span className="relative z-10">Start Building</span>
              <ArrowRight size={20} />
              <span
                className="absolute inset-0 z-0 rounded-xl blur-xl opacity-70 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 89, 255, 0.5), rgba(0, 255, 233, 0.5), rgba(174, 0, 255, 0.5), rgba(255, 0, 153, 0.5))'
                }}
              />
            </button>
            <button className="shadow-xl hover:shadow-lg transition-all cursor-pointer rounded-xl px-6 py-3 border border-zinc-200 font-semibold bg-white">
              Talk to Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Tabs (Only on large screens) */}
      <div className="absolute top-5/12 left-1/2 transform -translate-x-1/2 hidden lg:flex bg-zinc-100 gap-3 items-center p-1 rounded-xl font-semibold text-zinc-500 text-sm tracking-tight">
        <h1
          className={`${tabState === 'SMB' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`}
          onClick={() => setTabState('SMB')}
        >
          <Image src={'/TabIcons/svg-image-3.svg'} alt="budget" width={18} height={18} /> Smart Budgeting
        </h1>
        <h1
          className={`${tabState === 'PM' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`}
          onClick={() => setTabState('PM')}
        >
          <Image src={'/TabIcons/svg-image-4.svg'} alt="budget" width={18} height={18} /> Payment Reminders
        </h1>
        <h1
          className={`${tabState === 'ST' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`}
          onClick={() => setTabState('ST')}
        >
          <Image src={'/TabIcons/svg-image-5.svg'} alt="budget" width={18} height={18} /> Secure Transactions
        </h1>
        <h1
          className={`${tabState === 'INV' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`}
          onClick={() => setTabState('INV')}
        >
          <Image src={'/TabIcons/svg-image-6.svg'} alt="budget" width={18} height={18} /> Investing
        </h1>
      </div>

      {/* Hero Image */}
      <div className="w-full  flex justify-center px-4 mt-[-2rem] sm:mt-[-3rem] md:mt-[-5rem]">
        <Image
          src="/heroimg.png"
          width={1000}
          height={1000}
          alt="heroimg"
          className="border border-zinc-200 rounded-xl shadow-lg max-w-full h-auto"
          style={{
            boxShadow: '8px 2px 17px 1px rgba(0, 0, 255, 0.5), -8px 1px 20px 1px rgba(255, 0, 150, 0.5)',
          }}
        />
      </div>
    </section>
  );
}
