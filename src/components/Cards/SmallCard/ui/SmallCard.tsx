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
      className={styles.wrapper}
    >
      <Agencies />
      <Heading>Программы вознаграждения</Heading>
      <Text>Получите вознаграждение за привлеченных пользователей на платформу DEPro</Text>
    </motion.div>
  )
}
