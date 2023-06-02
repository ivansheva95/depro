'use client'

import React from 'react'
import styles from './SmallCard.module.scss'
import { Agencies } from '@/components/Svgs'
import { Heading, Text } from '@/ui'
import { motion } from 'framer-motion'

type Props = {
  title: string
  text: string
}

export default function SmallCard({ title, text }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: .3 } }}
      viewport={{ amount: 0.1, once: true }}
      className={styles.wrapper}
    >
      <Agencies />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </motion.div>
  )
}
