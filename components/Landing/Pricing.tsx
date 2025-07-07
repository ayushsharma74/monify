import { manrope } from "@/fonts/font";
import { ArrowRight, Check } from "lucide-react";
import ElementBlurFade from "../ElementBlurFade";
import TextBlurFade from "../TextBlurFade";

export default function Pricing() {
    return (
        <section>
            <div className="py-20 pb-8">

                <div className={`${manrope.className} text-5xl md:text-6xl font-bold text-center tracking-tighter`}>
                    <div className="text-sm   flex items-center justify-center my-4">
                        <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200"> Pricing</h1>
                    </div>
                    <h1><TextBlurFade text="Choose the Plan That" spaceSplitting={true} /></h1>
                    <h1><TextBlurFade text="Fits Your Needs" spaceSplitting={true} /></h1>
                </div>
                <div className="font-semibold text-zinc-500 tracking-tight text-center mt-4">
                    <p><TextBlurFade text="Affordable plans with all the features you " spaceSplitting={true} /></p>
                    <p><TextBlurFade text="need to succeed." spaceSplitting={true} /></p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row px-3 justify-center items-center gap-8 py-10">
                <ElementBlurFade delay={0.4} >

                    <PricingCard plan="Basic Plan" pricing='Free' incl={["Track your spending", "Set up to 1 savings goal", "Access basic reports"]} />
                </ElementBlurFade>
                <ElementBlurFade delay={0.6} >

                    <PricingCard plan="Premium Plan" pricing='$9.99/m' incl={["All features of Basic Plan", "Unlimited savings goals", "Advanced reporting and insights"]} />
                </ElementBlurFade>
                <ElementBlurFade delay={0.8} >

                    <PricingCard plan="Ultra Plan" pricing='$100/m' incl={["All features of Premium Plan", "Unlimited savings goals", "Advanced reporting and insights"]} />
                </ElementBlurFade>
            </div>
        </section>
    )
}

function PricingCard({ plan, pricing, incl }: { plan: string, pricing: string, incl: string[] }) {
    return (
        <div className="bg-[#F9EDF9] p-5 rounded-2xl">
            <div className="bg-[#FBA7FF] text-[#8C2891] text-sm w-fit px-3 mb-2 py-1.5 rounded-full">
                <p>{plan}</p>
            </div>
            <h1 className={`${manrope.className} text-6xl font-bold tracking-tighter text-[#FBA7FF]`}>{pricing}</h1>
            <p className={`${manrope.className} font-semibold tracking-tighter text-zinc-700 mb-5 mt-3 text-sm`}>Our users have saved over $10 million with savings tools.</p>
            <button className="shadow-md mb-14 hover:shadow-lg transition-all cursor-pointer rounded-xl hover:rounded-2xl px-4 py-3  bg-black text-white font-semibold flex gap-1 items-center"
                style={{
                    boxShadow: '8px 2px 17px 1px rgba(0, 0, 255, 0.5), -8px 1px 20px 1px rgba(255, 0, 150, 0.5)',
                }}
            >Get Started
                <ArrowRight size={20} />
            </button>
            <p>What’s included :</p>
            {incl.map((item, index) => (
                <div key={index} className="flex items-center gap-2 my-2">
                    <Check className="bg-[#FBA7FF] p-1 rounded-full" />
                    <p>{item}</p>
                </div>

            ))}
        </div>
    )
}

