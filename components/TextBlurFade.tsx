'use client'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function TextBlurFade({ text, spaceSplitting }: { text: string , spaceSplitting: boolean }) {
    const [chars, setChars] = useState<string[]>()
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (spaceSplitting) {
            // Ensure spaces are preserved
            const wordsWithSpaces = text.split(/(\s+)/); 
            setChars(wordsWithSpaces)
        } else {
            setChars(text.split(''))
        }
    }, [text, spaceSplitting])


    return (
        <span ref={ref} style={{ display: 'inline-block' }}>
            {chars?.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: isInView ? i * 0.02 : 0,
                        ease: 'easeOut',
                    }}
                    style={{ display: 'inline-block', whiteSpace: 'pre' }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
}
