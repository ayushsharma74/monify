import { manrope } from "@/fonts/font";
import Image from "next/image";
import ElementBlurFade from "../ElementBlurFade";
import TextBlurFade from "../TextBlurFade";

export default function Testimonials() {
    const TestimonialData = [
        {
            title: "Anjela",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "Monify made budgeting effortless, and I’m finally sticking to my savings goals!"
        },
        {
            title: "Rahul",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "This app helped me visualize my spending habits like never before. Highly recommend!"
        },
        {
            title: "Lena",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "Tracking my expenses has never been this easy. Monify truly changed the game for me!"
        },
        {
            title: "James",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "Simple, clean, and super effective. I love how Monify keeps me financially on track."
        },
        {
            title: "Aisha",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "I’ve tried many apps, but Monify actually made me excited to manage my money!"
        },
        {
            title: "Carlos",
            image: 'https://pbs.twimg.com/profile_images/1938708596046626816/PI2DJ5Bj_400x400.jpg',
            description: "Budgeting used to be a chore, but now it feels like a win every day thanks to Monify."
        }
    ];



    return (
        <section>
            <div className="py-20 pb-32">

                <div className={`${manrope.className} text-5xl md:text-6xl font-bold text-center tracking-tighter`}>
                    <div className="text-sm   flex items-center justify-center my-4">
                        <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200"> Testimonials</h1>
                    </div>
                    <h1><TextBlurFade text="What Our Users" spaceSplitting={true} /></h1>
                    <h1><TextBlurFade text="Are Saying" spaceSplitting={true} /></h1>
                </div>
                <div className="font-semibold text-zinc-500 tracking-tight text-center mt-4">
                    <p><TextBlurFade text="Don’t just take our word for it – hear from our " spaceSplitting={true} /></p>
                    <p><TextBlurFade text="satisfied customers." spaceSplitting={true} /></p>
                </div>
            </div>

        <ElementBlurFade delay={0.4}>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl px-4 mx-auto">
                {TestimonialData.map(({ title, image, description }) => <TestimonialCard key={title} title={title} image={image} description={description} />)}
            </div>
        </ElementBlurFade>
            <div className="flex items-center justify-center py-12">

            <button className="shadow-md hover:shadow-lg bg-white transition-all cursor-pointer rounded-xl px-4 py-2 border border-zinc-200 font-semibold">See more</button>
            </div>

        </section>
    )
}

function TestimonialCard({ title, image, description }: { title: string, image: string, description: string }) {
    return (
        <div className="flex flex-col gap-6 bg-zinc-100 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
                <Image src={image} className="rounded-full" alt="image" width={40} height={40} />
                <h1 className={`${manrope.className} text-xl font-bold tracking-tighter`}>{title}</h1>
            </div>
            <p className={`${manrope.className} text-zinc-700 font-semibold text-sm tracking-tight`}>{description}</p>
        </div>
    )
}