import React from 'react'
import styles from './Button.module.scss'

type Props = {
  variant?: 'blue'
  children: React.ReactNode
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const variantButton = {
  blue: styles.blue
}

export function Button({ variant = 'blue', children, ...rest }: Props) {
  return (
    <button className={`${styles.base} ${variantButton[variant]}`} {...rest}>
      {children}
    </button>
  )
}
