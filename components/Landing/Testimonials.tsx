import { manrope } from "@/fonts/font";

export default function Testimonials() {
    return (
        <section>
            <div className="py-20">

            <div className={`${manrope.className} text-6xl font-bold text-center tracking-tighter`}>
                <div className="text-sm   flex items-center justify-center my-4">
                    <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200"> Testimonials</h1>
                </div>
                <h1>What Our Users</h1>
                <h1>Are Saying</h1>
            </div>
            <div className="font-normal text-zinc-500 tracking-tight text-center mt-4">
                <p>Don’t just take our word for it – hear from our </p>
                <p>satisfied customers.</p>
            </div>
            </div>
        </section>
    )
}