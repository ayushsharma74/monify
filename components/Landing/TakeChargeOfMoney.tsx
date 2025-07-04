import { geistSans, manrope } from "@/fonts/font";
import Image from "next/image";
import { motion } from "motion/react";

const images = [
  "/logos/svg-image-28.svg",
  "/logos/svg-image-29.svg",
  "/logos/svg-image-30.svg",
  "/logos/svg-image-31.svg",
  "/logos/svg-image-32.svg",
  "/logos/svg-image-33.svg",
  "/logos/svg-image-34.svg",
]

export default function TakeChargeOfMoney(){
    return (
        <>
        <section className={`flex justify-center items-center flex-col gap-3 ${geistSans.className}`}>
  <h1 className=" font-semibold">Trusted by 100+ companies</h1>

  <div className="relative w-[60vw] overflow-hidden">
    {/* Fade Overlays */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

    {/* Motion Scroller */}
    <motion.div
      className="flex gap-14 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      }}
    >
      {[...images, ...images].map((image, index) => (
        <div key={index} className="w-20 h-20 relative">
          <Image src={image} alt="logo" fill className="object-contain" />
        </div>
      ))}
    </motion.div>
  </div>
</section>

<section className="flex flex-col justify-center items-center py-32">
  <div className={`${manrope.className} text-6xl font-bold text-center tracking-tighter`}>

  <h1>Take Charge Of</h1>
  <h1>Your Money</h1>
  </div>
  <div className="font-normal text-zinc-500 tracking-tight text-center mt-4">

  <p>Smarter tools to manage, plan, and grow your finances—all</p>
  <p> in one platform.</p>
  </div>

  <div className="flex gap-4 mt-10 items-center text-sm ">
    <div className="flex gap-4 flex-col items-center justify-center">
      <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-14.svg'} alt="logo" width={23} height={23} /></span>
      <h1 className="">View all your accounts and expenses in one place.</h1>
    </div>
    <div className="bg-zinc-200 h-12 w-0.5 mx-4" />
    <div className="flex gap-4 flex-col items-center justify-center">
      <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-15.svg'} alt="logo" width={23} height={23} /></span>
      <h1>Get tailored recommendations to reach your financial goals.</h1>
    </div>
    <div className="bg-zinc-200 h-12 w-0.5 mx-4" />
    <div className="flex gap-4 flex-col items-center justify-center">
      <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-16.svg'} alt="logo" width={23} height={23} /></span>
      <h1 className="">Automate savings to reach your goals faster.</h1>
    </div>
  </div>
</section>
</>
    )
}