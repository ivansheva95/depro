'use client'

import React, { use } from 'react'
import styles from './Footer.module.scss'
import { firebaseApi } from '@/firebase'

export default function Footer() {
  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getContent = async () => {
      const content = await firebaseApi.getContent('footer', 'info')
      setContent(content)
    }
    getContent()
  }, [])

  // const content = use(firebaseApi.getContent('footer', 'info'))
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        {content?.text}
      </div>
    </footer>
  )
}
