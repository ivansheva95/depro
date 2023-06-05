import React from 'react'
import { Li } from './Li'
import { LiAnimated } from './LiAnimated'
import styles from './List.module.scss'

type Props = {
  variant?: 'ul' | 'ultwo'
  children: React.ReactNode
}

const variants = {
  ul: styles.ul,
  ultwo: styles.ultwo,
}

export function List({ variant = 'ul', children }: Props) {
  return (
    <ul className={variants[variant]}>
      {children}
    </ul>
  )
}

List.Li = Li
List.LiAnimated = LiAnimated
