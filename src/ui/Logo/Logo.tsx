import Image from 'next/image'
import React from 'react'
import logo from 'public/assets/image/logo.png'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <div className={styles.base}>
      <Image src={logo} alt='logo' />
    </div>
  )
}
