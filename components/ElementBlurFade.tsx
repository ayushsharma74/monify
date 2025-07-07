'use client'
import {motion, useInView} from 'motion/react'
import { useRef } from 'react'

export default function ElementBlurFade({children, delay}: {children: React.ReactNode, delay: number}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })

    return (
    <div ref={ref}>
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay }}
            >
            {children}
        </motion.div>
    </div>
    )
}