import { manrope } from "@/fonts/font";
import { Dot } from "lucide-react";
import Image from "next/image";

export default function HowMonifyWorks() {
    return (
        <section className="pt-20">
        <div className="text-sm flex items-center justify-center my-4 flex-col gap-3">
            <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200"> Benefits</h1>
            <h1 className={`${manrope.className} text-6xl tracking-tighter font-bold`}>How Monify Works</h1>
        </div>

        <div className={`${manrope.className} max-w-5xl mx-auto`}>
            <div className="flex justify-between items-center flex-row my-20">
                <div className="flex flex-col gap-4 w-8/12 pr-20">
                <div className="text-[#9D1C80] bg-[#FFD6F6]  font-semibold  rounded-full w-fit flex items-center pr-4">
                <Dot  size={34}/>
                <span className="text-sm" > Save Time</span>
                </div>
                    <h1 className="text-5xl font-bold tracking-tighter">Save Time And Stress</h1>
                    <p className="text-zinc-500 font-semibold  tracking-tight">Say goodbye to manual spreadsheets and complicated apps. Monify automates budgeting and tracking, so you can focus on what matters.</p>
                </div>
                <div className="rounded-xl overflow-hidden w-4/12" >
                    <Image src={'/CardImages/image1.png'} alt="image" width={400} height={400} />
                </div>
            </div>

            <div className="flex justify-between items-center flex-row gap-10 my-20">
                <div className="rounded-xl overflow-hidden w-4/12" >
                    <Image src={'/CardImages/image2.png'} alt="image" width={400} height={400} />
                </div>
                <div className="flex flex-col gap-4 w-8/12 pr-20">
                <div className="text-blue-800 bg-blue-100  font-semibold  rounded-full w-fit flex items-center pr-4">
                <Dot  size={34}/>
                <span className="text-sm" > Save More</span>
                </div>
                    <h1 className="text-5xl font-bold tracking-tighter">Make Smarter Financial Decisions</h1>
                    <p className="text-zinc-500 font-semibold  tracking-tight">With real-time insights and personalized recommendations, Monify empowers you to spend wisely and save more.</p>
                </div>
            </div>


            <div className="flex justify-between items-center flex-row my-20">
                <div className="flex flex-col gap-4 w-8/12 pr-20">
                <div className="text-green-800 bg-green-100  font-semibold  rounded-full w-fit flex items-center pr-4">
                <Dot  size={34}/>
                <span className="text-sm" > Achieve goals </span>
                </div>
                    <h1 className="text-5xl font-bold tracking-tighter">Achieve Your Dreams</h1>
                    <p className="text-zinc-500 font-semibold  tracking-tight">Whether it’s buying a home or traveling the world, Monify helps you plan and save for your biggest goals.</p>
                </div>
                <div className="rounded-xl overflow-hidden w-4/12" >
                    <Image src={'/CardImages/image3.png'} alt="image" width={400} height={400} />
                </div>
            </div>
        </div>
        </section>
    )
}