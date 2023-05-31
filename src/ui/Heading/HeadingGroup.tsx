import React from 'react'
import style from './HeadingGroup.module.scss'

type HeadingGroupProps = {
  children: React.ReactNode
}

export function HeadingGroup({ children }: HeadingGroupProps) {
  return (
    <div className={style.base}>
      {children}
    </ div>
  )
}
