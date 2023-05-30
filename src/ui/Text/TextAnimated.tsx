'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  size?: 'small' | 'base'
  children: React.ReactNode
}

const textSize = {
  base: 'text-xl',
  small: 'text-xl max-md:text-lg'
}

export function TextAnimated({ size = 'base', children }: Props) {
  return (
    <motion.p
      initial={{ y: '50px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1, transition: { duration: .3, delay: .3 } }}
      viewport={{ amount: 0.1, once: true }}
      className={textSize[size]}
    >
      {children}
    </motion.p>
  )
}
