import React from 'react'
import styles from './TextGroup.module.scss'

type Props = {
  variant?: 'base' | 'start'
  children: React.ReactNode
}

const variants = {
  base: styles.base,
  start: styles.start
}

export function TextGroup({ variant = 'base', children }: Props) {
  return (
    <div className={variants[variant]}>
      {children}
    </div>
  )
}