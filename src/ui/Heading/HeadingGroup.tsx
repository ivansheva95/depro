import React from 'react'
import styles from './HeadingGroup.module.scss'

type HeadingGroupProps = {
  variant?: 'base' | 'center'
  children: React.ReactNode
}

const headingVariant = {
  base: styles.base,
  center: styles.center
}

export function HeadingGroup({ variant = 'base', children }: HeadingGroupProps) {
  return (
    <div className={headingVariant[variant]}>
      {children}
    </ div>
  )
}
