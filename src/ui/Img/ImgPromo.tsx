'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
  image: any
}

export function ImgPromo({ image }: Props) {
  return (
    <motion.div
      style={{ height: '250px', width: '100%', position: 'relative' }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: .3, ease: 'easeIn' } }}
      viewport={{ amount: 0.1, once: true }}

    >
      <Image
        style={{ borderRadius: '20px', boxShadow: '0 0 10px var(--color-blue1)', objectFit: 'cover' }}
        fill
        src={image}
        alt='img'
      />
    </motion.div>
  )
}
