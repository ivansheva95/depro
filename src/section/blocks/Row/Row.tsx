import React from 'react'
import styles from './Row.module.scss'

type Props = {
  variant?: 'base' | 'col' | 'cards' | 'title' | 'wrap'
  children: React.ReactNode
}

const rowVariant = {
  base: styles.base,
  col: styles.col,
  cards: styles.cards,
  title: styles.title,
  wrap: styles.wrap,
}

export function Row({ variant = 'base', children }: Props) {
  return (
    <div className={rowVariant[variant]}>
      {children}
    </div>
  )
}
