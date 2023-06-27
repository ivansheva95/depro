'use client'

import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'
import { onClickScroll } from '@/utils/onClickScroll'

type Props = {
  logo: any
}

export function Logo({ logo }: Props) {
  return (
    <div className={styles.base}>
      <a href='#' onClick={(event) => onClickScroll(event, '#promo')}><Image src={logo} alt='logo' fill /></a>
    </div>
  )
}
