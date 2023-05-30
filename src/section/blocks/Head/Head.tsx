import React from 'react'
import styles from './Head.module.scss'

type Props = {
  children: React.ReactNode
}

export function Head({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}