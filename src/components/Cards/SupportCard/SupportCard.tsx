import React from 'react'
import styles from './Support.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Gold } from '../../Svgs'

type Props = {
  title: string
  text: string
}

export default function SupportCard({ title, text }: Props) {
  return (
    <div className={styles.card}>
      <Gold />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
