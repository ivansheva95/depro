import React from 'react'
import styles from './Text.module.scss'

type Props = {
  size?: 'small' | 'base'
  children: React.ReactNode
}

const textSize = {
  base: styles.base,
  small: styles.small
}

export function Text({ size = 'base', children }: Props) {
  return (
    <p className={textSize[size]}>
      {children}
    </p>
  )
}
