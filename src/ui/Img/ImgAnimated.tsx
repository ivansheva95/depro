'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import styles from './Img.module.scss'

type Props = {
  height?: number
  width?: number
  image: string | StaticImageData
  imageLabel: string
}

export function ImgAnimated({ height, width, image, imageLabel }: Props) {
  return (
    <motion.div
      style={{ height, width }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: .3 } }}
      viewport={{ amount: 0.1, once: true }}
      className={styles.base}
    >
      <Image src={image} alt={imageLabel} placeholder='blur' />
    </motion.div>
  )
}
