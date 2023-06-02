'use client'

import Image from 'next/image'
import React from 'react'
import logo from 'public/assets/image/logo.png'
import styles from './Logo.module.scss'
import Link from 'next/link'
import { onClickScroll } from '@/utils/onClickScroll'

export function Logo() {
  return (
    <div className={styles.base}>
      <a href='#' onClick={(event) => onClickScroll(event, '#promo')}><Image src={logo} alt='logo' /></a>
    </div>
  )
}
