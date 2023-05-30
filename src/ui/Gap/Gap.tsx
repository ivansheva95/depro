import React from 'react'
import styles from './Gap.module.scss'

type Props = {
  children: React.ReactNode
}

export function Gap({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}
