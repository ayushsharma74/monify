import { useState } from "react";
import { plusJakartaSans } from "@/fonts/font";
import { ArrowRight } from "lucide-react";
import {motion} from "motion/react"
import Image from "next/image";

type Tabs = 'SMB' | 'PM' | 'ST' | 'INV'
export default function HeroSection() {
    const [tabState, setTabState] = useState<Tabs>('SMB');

    return (
        <section>
        <div className=" h-[100vh] max-w-4xl mx-auto flex justify-start items-center ">
          <div className="flex flex-col gap-4 absolute top-2/5 left-4/9 transform -translate-x-1/2 -translate-y-1/2">
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
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4  , delay: 0.5}} className="font-normal text-zinc-500 tracking-tight" >

            <p className="">Try a new, better way of building customer-facing </p>
            <p>integrations for Saas products.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4  , delay: 0.6}} className="flex gap-4">
            <button className="shadow-md hover:shadow-lg transition-all cursor-pointer rounded-xl hover:rounded-2xl px-4 py-3  bg-black text-white font-semibold flex gap-1 items-center"
            style={{
              boxShadow: '8px 2px 17px 1px rgba(0, 0, 255, 0.5), -8px 1px 20px 1px rgba(255, 0, 150, 0.5)',
            }}
            >Start Building
            <ArrowRight size={20} />
            </button>
            <button className="shadow-xl hover:shadow-lg transition-all cursor-pointer rounded-xl px-4 py-3 border border-zinc-200 font-semibold">Talk to Us</button>
            </motion.div>
          </div>
          
        </div>
        <div className="absolute top-6/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-100 flex gap-3 items-center p-1 rounded-xl font-semibold text-zinc-500 text-sm tracking-tight">
            <h1 className={`${tabState === 'SMB' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`} onClick={() => setTabState('SMB')}><Image src={'/TabIcons/svg-image-3.svg'} alt="budget" width={18} height={18}/> Smart Budgeting</h1>
            <h1 className={`${tabState === 'PM' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`} onClick={() => setTabState('PM')}> <Image src={'/TabIcons/svg-image-4.svg'} alt="budget" width={18} height={18}/>Payment Reminders</h1>
            <h1 className={`${tabState === 'ST' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`} onClick={() => setTabState('ST')}> <Image src={'/TabIcons/svg-image-5.svg'} alt="budget" width={18} height={18}/>Secure Transactions</h1>
            <h1 className={`${tabState === 'INV' && 'bg-white p-2 rounded-lg shadow-lg text-black'} p-2 cursor-pointer transition-all flex gap-2`} onClick={() => setTabState('INV')}><Image src={'/TabIcons/svg-image-6.svg'} alt="budget" width={18} height={18}/> Investing</h1>
        </div>
        <div className="flex justify-center relative left-1/2 -top-20 transform -translate-x-1/2 "
         
        >
          <Image src={'/heroimg.png'}
          style={{
            boxShadow: '8px 2px 17px 1px rgba(0, 0, 255, 0.5), -8px 1px 20px 1px rgba(255, 0, 150, 0.5)',
          }}
          className="border border-zinc-200 rounded-xl" alt="heroimg" width={1000} height={1000}  />
        </div>
        </section>
    )
}