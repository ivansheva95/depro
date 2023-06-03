import React from 'react'
import styles from './Heading.module.scss'

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const headingStyle = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: '',
  h6: '',
}

export function Heading({ tag = 'h2', children }: Props) {
  const Tag = tag

  return (
    <Tag className={headingStyle[tag]}>
      {children}
    </Tag>
  )
}
