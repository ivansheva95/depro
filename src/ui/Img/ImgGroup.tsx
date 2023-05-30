import React from 'react'
import styles from './ImgGroup.module.scss'

type Props = {
  children: React.ReactNode
}

export function ImgGroup({ children }: Props) {
  return (
    <div className={styles.base}>
      {children}
    </div>
  )
}
