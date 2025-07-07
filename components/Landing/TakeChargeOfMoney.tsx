import { geistSans, manrope } from "@/fonts/font";
import Image from "next/image";
import { motion } from "motion/react";
import ElementBlurFade from "../ElementBlurFade";
import TextBlurFade from "../TextBlurFade";
import AutoScrollingMarquee from "../AutoScrollingMarquee";

const images = [
  "/logos/svg-image-28.svg",
  "/logos/svg-image-29.svg",
  "/logos/svg-image-30.svg",
  "/logos/svg-image-31.svg",
  "/logos/svg-image-32.svg",
  "/logos/svg-image-33.svg",
  "/logos/svg-image-34.svg",
]

export default function TakeChargeOfMoney() {
  return (
    <>
      <section className={`flex justify-center items-center flex-col gap-3 px-4 mt-20 ${geistSans.className}`}>
  <h1 className="font-semibold text-center">Trusted by 100+ companies</h1>

  <div className="relative w-full max-w-screen-lg overflow-hidden">
    {/* Fade Overlays */}
    {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" /> */}

    {/* Motion Scroller */}
    <AutoScrollingMarquee images={images} height={80} speed={25}/>
    {/* <motion.div
      className="flex gap-14 "
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      }}
    >
      {[...images, ...images].map((image, index) => (
        <div key={index} className="w-20 h-20 relative shrink-0">
          <Image src={image} alt="logo" fill className="object-contain" />
        </div>
      ))}
    </motion.div> */}
  </div>
</section>

      <section className="flex flex-col justify-center items-center py-32">
        <div className={`${manrope.className} text-5xl md:text-6xl font-bold text-center tracking-tighter`}>

          <h1><TextBlurFade text="Take Charge Of" spaceSplitting={false} /> </h1>
          <h1><TextBlurFade text="Your Money" spaceSplitting={false} /></h1>
        </div>
        <div className="font-normal text-zinc-500 tracking-tight text-center mt-4">

          <p><TextBlurFade text="Smarter tools to manage, plan, and grow your finances—all" spaceSplitting={true} /></p>
          <p> <TextBlurFade text="in one platform." spaceSplitting={false} /></p>
        </div>

        <div className="flex gap-4 mt-10 items-center flex-col md:flex-row px-10 text-center text-sm ">
          <ElementBlurFade delay={0.2}>
            <div className="flex gap-4 flex-col items-center justify-center">
              <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-14.svg'} alt="logo" width={23} height={23} /></span>
              <h1 className="">View all your accounts and expenses in one place.</h1>
            </div>
          </ElementBlurFade>
          <div className="bg-zinc-200 h-12 w-0.5 mx-4" />
          <ElementBlurFade delay={0.4}>

            <div className="flex gap-4 flex-col items-center justify-center">
              <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-15.svg'} alt="logo" width={23} height={23} /></span>
              <h1>Get tailored recommendations to reach your financial goals.</h1>
            </div>
          </ElementBlurFade>
          <div className="bg-zinc-200 h-12 w-0.5 mx-4" />
          <ElementBlurFade delay={0.6}>

            <div className="flex gap-4 flex-col items-center justify-center">
              <span className="bg-[#FBA7FF] py-2 px-5 rounded-full"><Image src={'/hero/svg-image-16.svg'} alt="logo" width={23} height={23} /></span>
              <h1 className="">Automate savings to reach your goals faster.</h1>
            </div>
          </ElementBlurFade>
        </div>
      </section>
    </>
  )
}