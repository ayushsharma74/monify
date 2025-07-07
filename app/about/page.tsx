'use client';
import TextBlurFade from "@/components/TextBlurFade";
import { geistSans } from "@/fonts/font";
import Image from "next/image";
import { motion } from "motion/react";
import { LinkedinIcon } from "lucide-react";
import ElementBlurFade from "@/components/ElementBlurFade";
import Achievements from "@/components/Landing/Achievements";
import Faq from "@/components/Landing/faq";
import Footer from "@/components/Landing/Footer";

export default function Page() {

    const images = [
        "/logos/svg-image-28.svg",
        "/logos/svg-image-29.svg",
        "/logos/svg-image-30.svg",
        "/logos/svg-image-31.svg",
        "/logos/svg-image-32.svg",
        "/logos/svg-image-33.svg",
        "/logos/svg-image-34.svg",
    ]

    return (
        <section className="mt-12">
            <div className={`max-w-5xl mx-auto flex flex-col gap-4 py-20 items-center px-4 ${geistSans.className}`}>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="my-3 shadow-lg rounded-4xl"
                >
                    <Image src={"/aboutlogo.png"} alt="image" width={60} height={60}/>
                </motion.div>
                <h1 className="font-semibold text-5xl md:text-7xl tracking-tighter text-center"><TextBlurFade text="About Monify" spaceSplitting={false} /></h1>
                <p className="text-center text-zinc-500 tracking-tight font-medium"><TextBlurFade text="At Monify, our mission is to simplify the way people manage their finances. We believe that everyone should have the tools to take control of their money, achieve their financial goals, and live with less stress." spaceSplitting={true} /></p>
                <div className="max-w-5xl my-12">

                    <Image src={"/BlogImgs/image4.png"} alt="image" width={1000} height={1000} className="shadow-lg  rounded-2xl  " />
                </div>
            </div>

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
            <div className="mt-20 mb-10">
                
                <h1 className="font-semibold text-5xl tracking-tighter text-center mb-2"><TextBlurFade text="Our Team" spaceSplitting={false} /></h1>
                <p className="text-center text-zinc-500 tracking-tight font-medium "><TextBlurFade text="we’re proud of the talented team" spaceSplitting={true} /></p>
                <p className="text-center text-zinc-500 tracking-tight font-medium"><TextBlurFade text="behind our platform." spaceSplitting={true} /></p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20 px-4">
                <ElementBlurFade delay={0.4}>
                <TeamCard image="/TeamImages/image1.png" name="John Doe" position="CEO & Co-Founder" />
                </ElementBlurFade>
                <ElementBlurFade delay={0.6}>

                <TeamCard image="/TeamImages/image2.png" name="Jane Doe" position="CTO & Co-Founder" />
                </ElementBlurFade>
                <ElementBlurFade delay={0.8}>

                <TeamCard image="/TeamImages/image3.png" name="John Doe" position="CEO & Co-Founder" />
                </ElementBlurFade>
            </section>
            <Achievements />
            <Faq />
            <Footer />
        </section>
    )
}

function TeamCard({image, name, position}: {image: string, name: string, position: string}) {
    return (
        <motion.div whileHover={{ y: -10 }} className={`${geistSans.className} flex flex-col gap-4 py-2 rounded-2xl`}>
            <Image src={image} width={500} height={500} className="rounded-2xl" alt="sind" />
            <div className="flex justify-between items-center px-3">
                <div >
                    <h1 className="font-semibold tracking-tight">{name}</h1>
                    <p className="text-zinc-400 font-medium tracking-tighter">{position}</p>
                </div>
                <span><LinkedinIcon size={20} className="hover:scale-105 cursor-pointer transition-all " /></span>
            </div>
        </motion.div>
    )
}