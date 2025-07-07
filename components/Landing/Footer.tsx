import { manrope } from "@/fonts/font";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer 
        style={{
            backgroundImage: "url('/BgImages/footer.png')",
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
        className={`${manrope.className} relative tracking-tight h-[60rem] md:h-screen bg-cover bg-center flex justify-center items-center flex-col  gap-10`}
        >
            <div className="absolute top-10 md:top-32 flex w-full flex-col-reverse md:flex-row lg:flex-row px-10  justify-center gap-16 md:gap-40  ">
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-[#D1A1D3]">Newsletter</h2>
                <h1 className="text-[#8C2891] font-bold text-3xl">Stay Updated with Monify!</h1>
                <div className="flex flex-row gap-2">
                    <input type="email" placeholder="Enter your email" className="bg-white border border-zinc-200 rounded-xl px-4 py-2" />
                    <button className="shadow-md hover:shadow-lg bg-white transition-all cursor-pointer rounded-xl px-4 py-2 border border-zinc-200 font-semibold">Sumbit</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                <div className="flex flex-col gap-3">
                    <h1 className="font-semibold text-[#D1A1D3]">Quick Links</h1>
                    <div className="flex flex-col gap-2 text-[#8C2891]">
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Blogs</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-semibold text-[#D1A1D3]">Legal Links</h1>
                    <div className="flex flex-col gap-2 text-[#8C2891]">
                        <Link href={'#'}>Terms Of Service</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-semibold text-[#D1A1D3]">Stay connect</h1>
                    <div className="flex flex-row gap-4 text-[#8C2891]">
                        <Link href={'#'}><Twitter size={22} /></Link>
                        <Link href={'#'}><Instagram size={22}/></Link>
                        <Link href={'#'}><Linkedin size={22}/></Link>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}