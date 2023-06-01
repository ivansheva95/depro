'use client'

import Link from 'next/link'
import React from 'react'
import styles from './MenuMobile.module.scss'
import { menuData } from '../data/menuData'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import {
  motion,
  AnimatePresence
} from 'framer-motion'
import { onClickScroll } from '@/utils/onClickScroll'

export function MenuMobile() {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = React.useState(false)

  const handleMenuActive = () => setMenuActive(state => !state)

  React.useEffect(() => {
    menuActive
      ? (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
      : (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
  }, [menuActive])

  return (
    <>
      <div
        className={`${styles.backdrop} ${menuActive ? styles.active : ''}`}
        onClick={handleMenuActive}
      >
      </div>

      <nav className={styles.container}>

        <div className={styles.burgerWrapper}>
          <div
            className={`${styles.burger} ${menuActive ? styles.active : ''}`}
            onClick={handleMenuActive}
          >
            <div className={`${styles.burger__btn} ${menuActive ? styles.active : ''}`}>
              <div className={`${styles.burger__decor} ${styles.top}`}></div>
              <div className={`${styles.burger__decor} ${styles.bottom}`}></div>
            </div>
          </div>
        </div>

        <div className={`${styles.list} ${menuActive ? styles.active : ''}`}>
          {menuActive &&
            <>
              <ul className={styles['list__category']}>
                {
                  React.Children.toArray(
                    menuData?.map(({ label, href }, index) => {
                      return (
                        <li
                          onClick={handleMenuActive}
                          className={`${[styles['list__item']]} ${pathname === href ? styles.active : ''}`}
                          style={{ animation: `menuRevealMobile .5s ease ${index / 15}s`, animationFillMode: `forwards` }}
                        >
                          <a
                            className={styles['list__link']}
                            onClick={(event) => onClickScroll(event, `#${label.toLowerCase()}`)}
                          >
                            {label}
                          </a>
                        </li>
                      )
                    })
                  )
                }
              </ul>
            </>}
        </div>
      </nav>
    </>
  )
}