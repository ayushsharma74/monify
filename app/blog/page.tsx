'use client'
import Footer from "@/components/Landing/Footer"
import TextBlurFade from "@/components/TextBlurFade";
import { geistSans, manrope } from "@/fonts/font"
import Image from "next/image"
import { motion } from 'motion/react'

export default function Page() {
    const blogData = [
        {
            title: "The Ultimate Guide to SaaS Marketing",
            tag: "Tech",
            date: "Mar 23, 2025",
            image: "/BlogImgs/image1.png"
        },
        {
            title: "5 Key Trends in SaaS Growth for 2025",
            tag: "SaaS",
            date: "Mar 16, 2025",
            image: "/BlogImgs/image2.png"
        },
        {
            title: "How Data-Driven Strategies Are important",
            tag: "Marketing",
            date: "Feb 16, 2025",
            image: "/BlogImgs/image3.png"
        },
        {
            title: "The Power of Content Marketing in SaaS",
            tag: "SaaS",
            date: "Feb 6, 2025",
            image: "/BlogImgs/image4.png"
        },
        {
            title: "Leveraging SEO for SaaS Success",
            tag: "Tech",
            date: "Feb 1, 2025",
            image: "/BlogImgs/image5.png"
        }
    ];
    return (
        <>
            <div className="my-20 max-w-5xl mx-auto px-4">
                <h1 className={`${geistSans.className} text-center text-7xl font-bold tracking-tight pt-20 pb-6 `}>
                    <TextBlurFade text="Insights & Blogs" spaceSplitting={true} />
                </h1>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {blogData.map((b, i) => (
                        <BlogCard key={i} title={b.title} tag={b.tag} date={b.date} image={b.image} />
                    ))}
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

function BlogCard({
    title,
    tag,
    date,
    image
}: {
    title: string,
    tag: string,
    date: string,
    image: string
}) {
    return (
        <div className="rounded-xl overflow-hidden bg-[#F9EDFA]">
            <Image src={image} alt="image" width={400} height={400} className="rounded-2xl" />
            <div className={`${manrope.className} tracking-tight p-3 flex flex-col gap-3 `}>
                <span className="bg-[#FBA7FF] px-2 w-fit py-1 rounded-full font-semibold text-sm text-[#8C2891]">{tag}</span>
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className="font-semibold text-zinc-500">{date}</p>
            </div>
        </div>
    )
}