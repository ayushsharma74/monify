'use client'

import Achievements from "@/components/Landing/Achievements";
import Faq from "@/components/Landing/faq";
import Footer from "@/components/Landing/Footer";
import HeroSection from "@/components/Landing/HeroSection"
import HowMonifyWorks from "@/components/Landing/HowMonifyWorks";
import Pricing from "@/components/Landing/Pricing";
import TakeChargeOfMoney from "@/components/Landing/TakeChargeOfMoney";
import TakeControlOfFinances from "@/components/Landing/TakeControlOfFinances";
import Testimonials from "@/components/Landing/Testimonials";



export default function Home() {
  

  return (
    <main className={`line-background overflow-x-hidden`}>
        <HeroSection />
        <TakeChargeOfMoney />
        <TakeControlOfFinances />
        <HowMonifyWorks />
        <Achievements />
        <Testimonials />
        <Pricing />
        <Faq />
        <Footer />
    </main>
  );
}
