import React from 'react'
import styles from './Indent.module.scss'

type Props = {
  variant?: 'base' | 'big' | 'small'
}

const indentVariant = {
  base: styles.base,
  big: styles.big,
  small: styles.small
}

export function Indent({ variant = 'base' }: Props) {
  return (
    <div className={indentVariant[variant]}></div>
  )
}
