import { manrope } from "@/fonts/font";
import { ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import TextBlurFade from "../TextBlurFade";
import ElementBlurFade from "../ElementBlurFade";

export default function Faq() {
  const faqs = [
    {
      question: "How does ScaleX drive SaaS growth?",
      answer: "At ScaleX, we leverage data-driven strategies, including precision performance marketing, engaging content creation, and tailored SEO techniques to boost your online visibility and conversion rates."
    },
    {
      question: "What types of SaaS companies do you work with?",
      answer: "Whether you offer cloud services, analytics, or productivity tools, our flexible approach is designed to meet your unique growth needs."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is tailored to each client’s needs based on the scope of work and targeted objectives. We offer a range of packages and a custom plan option, ensuring that you receive maximum value from every marketing dollar invested."
    },
    {
      question: "How quickly can we see results?",
      answer: "While every SaaS company is different, many clients begin to notice positive changes within the first three months of launching our strategies. Long-term, sustained growth is achieved through continuous optimization and regular performance reviews."
    },
    {
      question: "Do you offer customized strategies?",
      answer: "Absolutely. ScaleX specializes in crafting bespoke marketing solutions for each client. We conduct a thorough analysis of your market, competitors, and customer behavior to design strategies that align perfectly with your business goals."
    }
  ];


  return (
    <section className="py-20">
      <div className={`${manrope.className} text-5xl md:text-6xl font-bold text-center tracking-tighter`}>
        <div className="text-sm   flex items-center justify-center my-4">
          <h1 className="bg-white px-4 py-2 rounded-full shadow-md  tracking-normal border border-zinc-200">FAQ</h1>
        </div>
        <h1><TextBlurFade text="Frequently Asked" spaceSplitting={false} /> </h1>
        <h1><TextBlurFade text="Questions" spaceSplitting={false} /> </h1>
      </div>
      <ElementBlurFade delay={0.4}>

        <div className="max-w-md px-2 mx-auto my-6 ">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </ElementBlurFade>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${manrope.className} border border-zinc-300 rounded-xl overflow-hidden transition-all  my-3 hover:scale-101 active:scale-96`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between text-left p-4 font-semibold text-zinc-800 bg-white transition tracking-tight"
      >
        {question}
        <ChevronUp
          className="transition-all duration-300 ease-in-out"
          style={{
            transform: `rotate(${open ? 180 : 0}deg)`,
          }}
        />
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <div className="p-4 text-zinc-400 tracking-tighter font-semibold">{answer}</div>
      </div>
    </div>
  );
}