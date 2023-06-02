import React from 'react'
import styles from './Support.module.scss'
import Image from 'next/image'
import { Gold } from '@/components/Svgs'

export default function SupportCard() {
  return (
    <div className={styles.card}>
      <Gold />
      <h3 className={styles.title}>Поддержка</h3>
      <p className={styles.text}>Решите вопрос с помощью наших специалистов.</p>
    </div>
  )
}
