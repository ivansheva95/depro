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
      initial={{ y: '100px' }}
      whileInView={{ y: 0, transition: { duration: .3 } }}
      viewport={{ amount: 0.1, once: true }}
    >
      {children}
    </motion.li>
  )
}
