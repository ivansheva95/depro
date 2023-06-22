import React from 'react'
import styles from './TextGroup.module.scss'

type Props = {
  variant?: 'base' | 'start' | 'center'
  children: React.ReactNode
}

const variants = {
  base: styles.base,
  start: styles.start,
  center: styles.center
}

export function TextGroup({ variant = 'base', children }: Props) {
  return (
    <div className={variants[variant]}>
      {children}
    </div>
  )
}