'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import styles from './Img.module.scss'
import Modal from '../Modal/Modal'

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
  const [isModal, setIsModal] = React.useState(false)

  React.useEffect(() => {
    isModal
      ? (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
      : (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
  }, [isModal])

  const handleOpenModal = () => setIsModal(true)
  const handleCloseModal = () => setIsModal(false)

  console.log(isModal)
  return (
    <>
      <motion.div
        onClick={handleOpenModal}
        style={{ height, width }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: .3, ease: 'easeIn' } }}
        viewport={{ amount: 0.1, once: true }}
        className={ImgVariants[variant]}
      >
        <Image src={image} alt={imageLabel} placeholder='blur' />
      </motion.div >

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isModal && (
          // <motion.div
          //   key='modal'
          //   layout
          //   initial={{ scale: 0.1 }}
          //   animate={{ scale: 1, transition: { duration: .3, ease: 'easeInOut' } }}
          //   exit={{ scale: 0.1, transition: { duration: .3, ease: 'easeInOut' } }}
          // >
          <Modal isModal={isModal} handleCloseModal={handleCloseModal}>
            <Image src={image} alt={imageLabel} placeholder='blur' />
          </Modal>
          // </motion.div>
        )}
      </AnimatePresence >
    </>
  )
}
