import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        © 2023 DePro. All Rights Reserved
      </div>
    </footer>
  )
}
