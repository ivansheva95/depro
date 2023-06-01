import React from 'react'
import { Card } from './Card'
import styles from './Gallery.module.scss'

type Props = {
  children: React.ReactNode
}

export function Gallery({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

Gallery.Card = Card