import React from 'react'
import styles from './Text.module.scss'

type Props = {
  size?: 'small' | 'base'
  children: React.ReactNode
}

const textSize = {
  base: 'text-2xl',
  small: 'text-xl max-md:text-lg'
}

export function Text({ size = 'base', children }: Props) {
  return (
    <p className={textSize[size]}>
      {children}
      <div className='text-xl max-md:text-lg'>

      </div>
    </p>
  )
}
