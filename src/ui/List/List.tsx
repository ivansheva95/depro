import React from 'react'
import { Li } from './Li'
import { LiAnimated } from './LiAnimated'
import styles from './List.module.scss'


type Props = {
  children: React.ReactNode
}

export function List({ children }: Props) {
  return (
    <ul className={styles.ul}>
      {children}
    </ul>
  )
}

List.Li = Li
List.LiAnimated = LiAnimated
