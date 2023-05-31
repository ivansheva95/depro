'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './List.module.scss'


type Props = {
  children: React.ReactNode
}

export function LiAnimated({ children }: Props) {
  return (
    <motion.li
      className={styles.li}
      initial={{ x: '50px', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
      viewport={{ amount: 0.1, once: true }}
    >
      {children}
    </motion.li>
  )
}
