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
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: .3, delay: .6 } }}
      viewport={{ amount: 0.1, once: true }}
    >
      <button className={`${styles.base} ${variantButton[variant]}`} {...rest}>
        {children}
      </button>
    </motion.span>
  )
}
