import React from 'react'
import styles from './TextGroup.module.scss'

type Props = {
  children: React.ReactNode
}

export function TextGroup({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}