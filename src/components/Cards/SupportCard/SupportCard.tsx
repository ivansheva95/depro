import React from 'react'
import styles from './Support.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string
  text: string
}

export default function SupportCard({ title, text }: Props) {
  return (
    <div className={styles.card}>
      <svg width="100%" height="100%" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4047 14.4118L24.1389 11.8511C24.5006 11.7478 24.5006 11.2625 24.1389 11.1489L15.4047 8.58822C15.2842 8.55724 15.1855 8.46431 15.1527 8.35073L12.4787 0.255555C12.3691 -0.0851857 11.854 -0.0851857 11.7335 0.255555L9.0376 8.41268C9.00473 8.52626 8.9061 8.61919 8.78555 8.65017L0.270511 11.1489C-0.0911317 11.2522 -0.0911318 11.7375 0.270511 11.8511L8.78555 14.3498C8.9061 14.3808 9.00473 14.4737 9.0376 14.5873L11.7335 22.7444C11.8431 23.0852 12.3581 23.0852 12.4787 22.7444L15.1527 14.6493C15.1855 14.5357 15.2842 14.4428 15.4047 14.4118Z" fill="#F2BB41" />
      </svg>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
