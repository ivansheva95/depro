import React from 'react'
import styles from './Column.module.scss'

type Props = {
  variant?: 'base' | 'image' | 'content' | 'image-promo' | 'twoCards'
  children: React.ReactNode
}

const columnVariant = {
  base: styles.base,
  image: styles.image,
  content: styles.content,
  'image-promo': styles['image-promo'],
  twoCards: styles.twoCards
}

export function Column({ variant = 'base', children }: Props) {
  return (
    <div className={columnVariant[variant]}>
      {children}
    </div>
  )
}