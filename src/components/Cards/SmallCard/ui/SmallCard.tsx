'use client'

import React from 'react'
import styles from './SmallCard.module.scss'
import { Agencies } from '@/components/Svgs'
import { Heading, Text } from '@/ui'
import { motion } from 'framer-motion'

export default function SmallCard() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: .3 } }}
      viewport={{ amount: 0.1, once: true }}
      className={styles.wrapper}
    >
      <Agencies />
      <h3 className={styles.title}>Программы вознаграждения</h3>
      <p className={styles.text}>Получите вознаграждение за привлеченных пользователей на платформу DEPro</p>
    </motion.div>
  )
}
