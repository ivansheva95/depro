'use client';

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuData } from '../data/menuData';
import styles from './MenuDesktop.module.scss'

export function MenuDesktop() {
  const pathname = usePathname();
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {React.Children.toArray(
          menuData.map(({ label, href }, index) => {
            return (
              <li
                className={`${styles.item} ${pathname === href ? styles.active : ''}`}
                style={{ animation: `menuRevealDesktop 0.5s ease ${index / 15}s`, animationFillMode: `forwards` }}
              >
                <Link className={styles.link} href={href}>{label}</Link>
              </li>
            )
          })
        )}
      </ul>
    </nav>
  )
}
