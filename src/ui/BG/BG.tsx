import React from 'react'
import styles from './BG.module.scss'
import Image from 'next/image'
import bg from 'public/assets/image/bg.jpeg'

export default function BG() {
  return (
    <div className={styles.wrapper}>
      <Image src={bg} alt='bg' placeholder='blur' />
    </div>
  )
}
