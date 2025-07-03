'use client'
import { plusJakartaSans } from "@/fonts/font";
import { ArrowRight } from "lucide-react";
import {motion} from "motion/react"
import { useState } from "react";

type Tabs = 'SMB' | 'PM' | 'ST' | 'INV'

export default function Home() {
  const [tabState, setTabState] = useState<Tabs>('SMB');

  return (
    <main className={`line-background h-screen`}>
        <div className=" h-[100vh] max-w-4xl mx-auto flex justify-start items-center ">
          <div className="flex flex-col gap-4 absolute top-2/5 left-3/7 transform -translate-x-1/2 -translate-y-1/2">
            <div  className={`${plusJakartaSans.className} font-bold text-8xl tracking-tighter`}>

            <div className=" font-bold flex">
              <motion.h1 className="mr-2"  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 , delay: 0.1}}>Take</motion.h1> 
              <motion.h1 className="mr-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0  }} transition={{ duration: 0.4 , delay: 0.2 }}>Control</motion.h1>
              <motion.h1 className="mr-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4  , delay: 0.3}}>Of</motion.h1>
                </div>
            <div className=" font-bold flex">
            <motion.h1 className="mr-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4  , delay: 0.40}}>Your</motion.h1>
            <motion.h1 className="mr-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4  , delay: 0.47}}>Finances</motion.h1>
            </div>
            </div>
            <div className="font-normal text-zinc-500 tracking-tight" >

            <p className="">Try a new, better way of building customer-facing </p>
            <p>integrations for Saas products.</p>
            </div>
            <div className="flex gap-4">
            <button className="shadow-md hover:shadow-lg transition-all cursor-pointer rounded-xl hover:rounded-2xl px-4 py-3  bg-black text-white font-semibold flex gap-1 items-center"
            style={{
              boxShadow: '8px 2px 17px 1px rgba(0, 0, 255, 0.5), -8px 1px 20px 1px rgba(255, 0, 150, 0.5)',
            }}
            >Start Building
            <ArrowRight size={20} />
            </button>
            <button className="shadow-xl hover:shadow-lg transition-all cursor-pointer rounded-xl px-4 py-3 border border-zinc-200 font-semibold">Talk to Us</button>
            </div>
          </div>
          
        </div>
        <div className="absolute top-6/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 flex gap-3 items-center p-1 rounded-xl font-semibold text-zinc-500 text-sm tracking-tight">
            <h1 className={`${tabState === 'SMB' && 'bg-white p-2 rounded-lg shadow-lg'} p-2 cursor-pointer transition-all`} onClick={() => setTabState('SMB')}>Smart Budgeting</h1>
            <h1 className={`${tabState === 'PM' && 'bg-white p-2 rounded-lg shadow-lg'} p-2 cursor-pointer transition-all`} onClick={() => setTabState('PM')}>Payment Reminders</h1>
            <h1 className={`${tabState === 'ST' && 'bg-white p-2 rounded-lg shadow-lg'} p-2 cursor-pointer transition-all`} onClick={() => setTabState('ST')}>Secure Transactions</h1>
            <h1 className={`${tabState === 'INV' && 'bg-white p-2 rounded-lg shadow-lg'} p-2 cursor-pointer transition-all`} onClick={() => setTabState('INV')}>Investing</h1>
        </div>
    </main>
  );
}
