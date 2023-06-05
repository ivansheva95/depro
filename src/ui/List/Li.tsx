import React from 'react'
import styles from './List.module.scss'

type Props = {
  variant?: 'li' | 'litwo'
  children: React.ReactNode
}

const variants = {
  li: styles.li,
  litwo: styles.litwo,
}
export function Li({ variant = 'li', children }: Props) {
  return (
    <li className={variants[variant]}>
      {children}
    </li>
  )
}
