import React from 'react'
import styles from './List.module.scss'

type Props = {
  children: React.ReactNode
}

export function Li({ children }: Props) {
  return (
    <li className={styles.li}>
      {children}
    </li>
  )
}
