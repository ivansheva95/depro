import React from 'react'

import { ArrowRight, Menu } from '@/components'
import {
  Button,
  ButtonGroup,
  Container,
  Logo
} from '@/ui'
import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.outer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Logo />
          </div>

          <div className={styles.right}>
            <Menu />
            {/* <div className={styles.beta}>
              <span>Бета версия</span>
              <Link href='/'>Перейти</Link>
              <ArrowRight />
            </div> */}
          </div>
        </div>
      </Container>
    </header>
  )
}
