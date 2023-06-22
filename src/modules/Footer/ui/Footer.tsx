import React, { use } from 'react'
import styles from './Footer.module.scss'
import { firebaseApi } from '@/firebase'

export default function Footer() {
  const content = use(firebaseApi.getContent('footer', 'info'))
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        {content?.text}
      </div>
    </footer>
  )
}
