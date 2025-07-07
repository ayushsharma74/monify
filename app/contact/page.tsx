'use client'
import Faq from "@/components/Landing/faq"
import Footer from "@/components/Landing/Footer"
import TextBlurFade from "@/components/TextBlurFade"
import { geistSans } from "@/fonts/font"
import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <section className="mt-20">
            <div className={`max-w-5xl mx-auto flex flex-col gap-4 py-20 px-4 ${geistSans.className}`}>

            <h1 className="font-semibold text-5xl md:text-7xl tracking-tighter text-center"><TextBlurFade text="Contact Us" spaceSplitting={false} /></h1>
            <p className="text-center text-zinc-500 tracking-tight font-medium"><TextBlurFade text="We’re excited to connect with you! Whether you have a question about our services, need assistance with your marketing strategy, or are ready to take the next step in your growth journey, our team is here to help." spaceSplitting={true} /></p>
            </div>
            <div className="max-w-5xl px-4 mx-auto">
            <ContactCard />
            </div>
            <div className="my-20">

            <Faq />
            </div>
            <Footer />
        </section>
    )
}

function ContactCard() {
    return (
        <div className={`flex flex-col-reverse md:flex-row gap-8 shadow-lg bg-white transition-all rounded-3xl px-6 md:px-10 py-8 md:py-12 border border-zinc-200 ${geistSans.className}`}>
            <div className="w-1/2 flex flex-col gap-3">
                <div>
                    <h1 className="font-medium text-xl text-zinc-400 tracking-tight">Email:</h1>
                    <h2 className="font-medium tracking-tight text-lg">hello@scalexagency.com</h2>
                </div>
                <div>
                    <h1 className="font-medium text-xl text-zinc-400 tracking-tight">Phone:</h1>
                    <h2 className="font-medium tracking-tight text-lg">+1 (555) 123-4567</h2>
                </div>
                <div>
                    <h1 className="font-medium text-xl text-zinc-400 tracking-tight">Address:</h1>
                    <h2 className="font-medium tracking-tight text-lg">123 Innovation Drive, Suite 400, Tech City</h2>
                </div>
                <div>
                    <h1 className="font-medium text-xl text-zinc-400 tracking-tight">Socials</h1>
                    <div className="flex flex-row gap-3">
                        <Link href={'#'}><Twitter size={22} /></Link>
                        <Link href={'#'}><Instagram size={22} /></Link>
                        <Link href={'#'}><Linkedin size={22} /></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 w-fit md:w-1/2">
                <h1 className="text-4xl md:text-5xl tracking-tight font-medium pb-5">Get In Touch</h1>
                <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Name" className="rounded-md bg-zinc-100 p-2"/>
                    <input type="text" placeholder="Email" className="rounded-md bg-zinc-100 p-2"/>
                </div>
                <textarea placeholder="Message" className="rounded-md bg-zinc-100 p-2  flex-1" />
                <button className=" md:flex shadow-md hover:shadow-lg items-center justify-center bg-white transition-all cursor-pointer rounded-xl px-3 py-2 border border-zinc-200 font-semibold ">Submit</button>
            </div>
        </div>
    )
}