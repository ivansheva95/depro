import React from 'react'
import styles from './Text.module.scss'

type Props = {
  variant?: 'small' | 'base'
  children: React.ReactNode
}

const textVariant = {
  base: styles.base,
  small: styles.small
}

export function Text({ variant = 'base', children }: Props) {
  return (
    <p className={textVariant[variant]}>
      {children}
    </p>
  )
}
