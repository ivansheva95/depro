'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Button.module.scss'

type Props = {
  variant?: 'blue'
  children: React.ReactNode
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const variantButton = {
  blue: styles.blue
}

export function ButtonAnimated({ variant = 'blue', children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: .5, ease: 'easeIn', delay: .5 } }}
      viewport={{ amount: 0.1, once: true }}
    >
      <button className={`${styles.base} ${variantButton[variant]}`} {...rest}>
        {children}
      </button>
    </motion.div>
  )
}
