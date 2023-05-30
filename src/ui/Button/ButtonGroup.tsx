import React from 'react'
import styles from './ButtonGroup.module.scss'

type Props = {
  children: React.ReactNode
}

export function ButtonGroup({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}