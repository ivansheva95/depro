import React from 'react'
import styles from './Modal.module.scss'
import Portal from '../Portal/Portal'
import { AnimatePresence, motion } from 'framer-motion'
import ReactDOM from 'react-dom'

type Props = {
  isModal: boolean
  children: React.ReactNode
  handleCloseModal: () => void
}

export default function Modal({ isModal, children, handleCloseModal }: Props) {

  return ReactDOM.createPortal(
    <motion.div
      key='modal'
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: .3, ease: 'easeIn' } }}
      exit={{ scale: 0, transition: { duration: .3, ease: 'easeIn' } }}
    >
      <div onClick={handleCloseModal} className={styles.backdrop}></div>
      <div onClick={handleCloseModal} className={styles.outer}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </motion.div>,
    document.querySelector('#portal') as HTMLElement
  )
}
