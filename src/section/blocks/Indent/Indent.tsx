import React from 'react'
import styles from './Indent.module.scss'

type Props = {
  variant?: 'base' | 'big'
}

const indentVariant = {
  base: styles.base,
  big: styles.big
}

export function Indent({ variant = 'base' }: Props) {
  return (
    <div className={indentVariant[variant]}></div>
  )
}
