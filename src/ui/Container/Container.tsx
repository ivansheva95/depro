import React from 'react'
import styles from './Container.module.scss'

type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}
