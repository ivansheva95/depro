import React from 'react'
import styles from './Gap.module.scss'

type Props = {
  variant?: 'base'
  children: React.ReactNode
}

const variantGap = {
  base: styles.base
}

export function Gap({ variant = 'base', children }: Props) {
  return (
    <div className={variantGap[variant]}>
      {children}
    </div>
  )
}
