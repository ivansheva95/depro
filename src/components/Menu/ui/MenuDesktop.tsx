'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuData } from '../data/menuData';
import styles from './MenuDesktop.module.scss'
import { onClickScroll } from '@/utils/onClickScroll';
import { useActiveLinktoScroll } from '@/hooks/useActiveLinktoScroll';

export function MenuDesktop() {
  const activeLink = useActiveLinktoScroll()

  console.log(activeLink)
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {React.Children.toArray(
          menuData.map(({ label, href }, index) => {
            const isActive = label.toLocaleLowerCase().includes(activeLink.toLocaleLowerCase())
            return (
              <li
                className={`${styles.item} `}
                style={{ animation: `menuRevealDesktop 0.5s ease ${index / 15}s`, animationFillMode: `forwards` }}
              >
                <a
                  href={href}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                  onClick={(event) => onClickScroll(event, `#${label.toLowerCase()}`)}
                >
                  {label}
                </a>
              </li>
            )
          })
        )}
      </ul>
    </nav>
  )
}
