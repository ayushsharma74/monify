'use client'
import { geistSans, manrope } from "@/fonts/font";
import Image from "next/image";
import { useEffect, useState } from "react";
import {AnimatePresence, motion} from "motion/react";
import ElementBlurFade from "../ElementBlurFade";
import TextBlurFade from "../TextBlurFade";

export default function TakeControlOfFinances() {
    
    return (
        <section>
            <div className={`${manrope.className} text-6xl font-bold text-center tracking-tighter`}>
                <div className="text-sm   flex items-center justify-center my-4">
                <ElementBlurFade delay={0.4}>
                    <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200"> Features</h1>
                    </ElementBlurFade>
                </div>
                <h1><TextBlurFade text="Take Control Of" spaceSplitting={false} /></h1>
                <h1><TextBlurFade text="Your Finances" spaceSplitting={false} /></h1>
            </div>
            <div className="font-normal text-zinc-500 tracking-tight text-center mt-4">

                <p><TextBlurFade text="Try a new, better way of building customer-facing" spaceSplitting={true} /></p>
                <p><TextBlurFade text="integrations for Saas products." spaceSplitting={false} /> </p>
            </div>
            <div className="max-w-5xl mx-auto my-6">
            <ElementBlurFade delay={0.6}>
                    <FeaturesCard />
            </ElementBlurFade>
            </div>
        </section>
    )
}

type Tabs = 'SMAB' | 'EXT' | 'GOT'


function FeaturesCard() {
    const TabContent = [
        {
            tab: 'SMAB',
            heading: 'Smart Budgeting',
            description: 'Create personalized budgets in minutes. Monify’s AI-driven insights suggest realistic spending limits based on your income and goals.',
            image: '/CardIcons/smart-budgeting.avif'
        },
        {
            tab: 'EXT',
            heading: 'Real-Time Expense Tracking',
            description: 'Sync your bank accounts and credit cards to track every transaction instantly. Categorize spending and spot trends with ease.',
            image: '/CardIcons/rtet.avif'
        },
        {
            tab: 'GOT',
            heading: 'Goal Setting & Progress Tracking',
            description: 'Set savings goals for vacations, emergencies, or big purchases. Monify tracks your progress and sends reminders to keep you on track.',
            image: '/CardIcons/gspt.avif'
        },
    ]
    const [activeTab, setActiveTab] = useState<Tabs>('SMAB');
    const [activeData, setActiveData] = useState(TabContent[0]);

    useEffect(() => {
        const data = TabContent.find((item) => item.tab === activeTab)
        if (data) {
            setActiveData(data)
        }
    }, [activeTab])
    

    return (
        
        <div className="grid grid-cols-6 gap-7 bg-[#FEF2FF] p-5 rounded-2xl min-h-[300px]">
        
            {/* Left Content with inner grid */}
            <div className="col-span-3 row-span-5 grid grid-rows-[1fr_auto] py-4">
            <motion.div 
                    layout
                    transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
                    className="space-y-2"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeData.tab}
                            // initial={{ opacity: 0, height: 0 }}
                            // animate={{ opacity: 1, height: 'auto' }}
                            // exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <h1 className={`text-5xl ${geistSans.className} tracking-tight font-semibold`}>{activeData.heading}</h1>
                            <p className={`text-sm text-zinc-600 ${geistSans.className} tracking-tight font-semibold mt-2`}>
                                {activeData.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                {/* Buttons aligned at bottom via auto row */}
                <div className={`flex gap-4 mt-4 ${geistSans.className} font-semibold text-[#b23bb8] text-sm`}>
                    <button className={`bg-[#f8d5fc] p-2 px-3 rounded-full transition-all duration-300 cursor-pointer ${activeTab === 'SMAB' ? 'bg-black text-white' : ''}`} onClick={() => setActiveTab('SMAB')}>Smart Budgeting</button>
                    <button className={`bg-[#f8d5fc] p-2 px-3 rounded-full transition-all duration-300 cursor-pointer ${activeTab === 'EXT' ? 'bg-black text-white' : ''}`} onClick={() => setActiveTab('EXT')}>Expense Tracking</button>
                    <button className={`bg-[#f8d5fc] p-2 px-3 rounded-full transition-all duration-300 cursor-pointer ${activeTab === 'GOT' ? 'bg-black text-white' : ''}`} onClick={() => setActiveTab('GOT')}>Goal Setting</button>
                </div>
            </div>

            {/* Right side visual block */}
            <div className="col-span-3 row-span-5 bg-[#FBA9FF] rounded-2xl flex items-center justify-center">
                <div className="text-white text-lg font-bold p-6">
                    <Image src={activeData.image} alt="img1" width={300} height={300} />
                </div>
            </div>
        </div>

    )
}