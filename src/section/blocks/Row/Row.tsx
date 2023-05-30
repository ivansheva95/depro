import React from 'react'
import styles from './Row.module.scss'

type Props = {
  variant?: 'base'
  children: React.ReactNode
}

const rowVariant = {
  base: styles.base
}

export function Row({ variant = 'base', children }: Props) {
  return (
    <div className={rowVariant[variant]}>
      {children}
    </div>
  )
}
