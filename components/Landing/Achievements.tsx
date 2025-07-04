import { geistSans, manrope } from "@/fonts/font";
import Image from "next/image";

export default function Achievements() {
    return (
        <section
            className="h-screen bg-cover bg-center flex justify-center items-center flex-col gap-3"
            style={{
                backgroundImage: "url('/BgImages/trees.png')",
            }}
        
        >
            <div>
                <div className="flex justify-center items-center flex-col gap-3" >
                    <div>
                        <h1 className={`${geistSans.className} font-semibold text-sm bg-white px-4 py-3 rounded-full `}>Achievements</h1>
                    </div>
                    <h1 className={`${manrope.className} text-5xl font-bold tracking-tighter`}>By the Numbers</h1>
                        <div className="text-center">

                    <p className={`${geistSans.className} font-semibold tracking-tighter text-zinc-500`}>See how we’ve helped thousands of users</p>
                    <p className={`${geistSans.className} font-semibold tracking-tighter text-zinc-500`} >improve their finances.</p>
                        </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-row gap-4 max-w-5xl mx-auto mt-10">
            <AchievementCard number="500K+" text="Join over 500k people managing their finances with Monify" image="/ByTheNum/image1.png"/>
            <AchievementCard number="$10M+" text="Our users have saved over $10 million with savings tools." image="/ByTheNum/image2.png"/>
            <AchievementCard number="95%" text="95% of our users report feeling more in control of their finances." image="/ByTheNum/image3.png"/>
            </div>
        </section>
    )
}

function AchievementCard({number, text, image}: {number: string, text: string, image: string}) {
    return (
        <div className="bg-white p-6 rounded-3xl flex items-start gap-4 flex-col">
                <div className="bg-[#FBA7FF] p-1.5 rounded-xl">
                    <Image src={image} alt="image" width={25} height={25} />
                </div>
                <h1 className={`${geistSans.className} text-5xl font-bold tracking-tighter text-[#FBA7FF]`}>{number}</h1>
                <p className={`${geistSans.className} text-[#000000b3] tracking-tight`}>{text}</p>
            </div>
    )
}