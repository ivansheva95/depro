import React, { use } from 'react'

import { ArrowRight, Menu } from '@/components'
import {
  Button,
  ButtonGroup,
  Container,
  Logo
} from '@/ui'
import styles from './Header.module.scss'
import Link from 'next/link'
import { firebaseApi } from '@/firebase'

export default function Header() {
  const logo = use(firebaseApi.getImages('logo'))

  return (
    <header className={styles.outer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Logo logo={logo?.[0]} />
          </div>

          <div className={styles.right}>
            <Menu />
          </div>
        </div>
      </Container>
    </header>
  )
}
