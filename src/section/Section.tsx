import React from 'react'
import {
  Row,
  Column,
  Head,
  Indent,
  Gap
} from './blocks'
import styles from './Section.module.scss'

type Props = {
  id?: string
  variant?: 'base' | 'promo' | 'wrap'
  children: React.ReactNode
}

const sectionVariant = {
  base: styles.base,
  promo: styles.promo,
  wrap: styles.wrap
}

export function Section({ id, variant = 'base', children }: Props) {
  return (
    <section id={id} className={sectionVariant[variant]}>
      {children}
    </section>
  )
}

Section.Row = Row
Section.Column = Column
Section.Head = Head
Section.Indent = Indent
Section.Gap = Gap
