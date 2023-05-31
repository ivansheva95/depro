'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Text.module.scss'

type Props = {
  size?: 'small' | 'base'
  children: React.ReactNode
}

const textSize = {
  base: styles.base,
  small: styles.small
}

export function TextAnimated({ size = 'base', children }: Props) {
  return (
    <motion.p
      initial={{ y: '50px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1, transition: { duration: .5, delay: .5 } }}
      viewport={{ amount: 0.1, once: true }}
      className={textSize[size]}
    >
      {children}
    </motion.p>
  )
}
