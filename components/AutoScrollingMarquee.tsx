'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

interface AutoScrollingMarqueeProps {
  images: string[]
  height?: number
  speed?: number // seconds
}

export default function AutoScrollingMarquee({
  images,
  height = 80,
  speed = 20,
}: AutoScrollingMarqueeProps) {
  const doubleImages = [...images, ...images]

  return (
    <div className="w-full px-4">
      <div className="relative isolate w-full max-w-screen-xl mx-auto overflow-hidden">
        {/* Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-14 w-fit max-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          }}
        >
          {doubleImages.map((image, index) => (
            <div
              key={index}
              className="relative shrink-0"
              style={{ width: height, height }}
            >
              <Image
                src={image}
                alt={`logo-${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
