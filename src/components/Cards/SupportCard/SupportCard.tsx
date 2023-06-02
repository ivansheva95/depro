import React from 'react'
import styles from './Support.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string
  text: string
  src: StaticImageData
}

export default function SupportCard({ title, text, src }: Props) {
  return (
    <div className={styles.card}>
      <Image src={src} alt='image' />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
