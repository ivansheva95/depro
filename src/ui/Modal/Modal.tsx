import React from 'react'
import styles from './Modal.module.scss'
import Portal from '../Portal/Portal'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  isModal: boolean
  children: React.ReactNode
  handleCloseModal: () => void
}

export default function Modal({ isModal, children, handleCloseModal }: Props) {

  return (
    <Portal>
      <div onClick={handleCloseModal} className={styles.backdrop}></div>
      <div onClick={handleCloseModal} className={styles.outer}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </Portal>
  )
}


