'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Heading.module.scss'

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const headingStyle = {
  h1: styles.h1,
  h2: styles.h2,
  h3: '',
  h4: '',
  h5: '',
  h6: '',
}

export function HeadingAnimated({ tag = 'h2', children }: Props) {
  const Tag = tag

  return (
    <motion.span
      initial={{ y: '50px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1, transition: { duration: .5, ease: 'easeInOut' } }}
      viewport={{ amount: 0.1, once: true }}
    >
      <Tag className={headingStyle[tag]}>
        {children}
      </Tag>
    </motion.span>
  )
}
