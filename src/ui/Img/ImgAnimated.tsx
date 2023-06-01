'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import styles from './Img.module.scss'

type Props = {
  variant?: 'base' | 'standart'
  height?: number
  width?: number
  image: string | StaticImageData
  imageLabel: string
}

const ImgVariants = {
  base: styles.base,
  standart: styles.standart
}

export function ImgAnimated({ variant = 'base', height, width, image, imageLabel }: Props) {
  return (
    <motion.div
      style={{ height, width }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: .5, ease: 'easeIn' } }}
      viewport={{ amount: 0.1, once: true }}
      className={ImgVariants[variant]}
    >
      <Image src={image} alt={imageLabel} placeholder='blur' />
    </motion.div>
  )
}
