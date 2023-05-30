'use client'

import React from 'react'
import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

export function Menu() {
  const [menuDesktop, setMenuDesktop] = React.useState(() => window?.innerWidth < 768)

  const getWindowSize = () => {
    window.innerWidth < 768
      ? setMenuDesktop(false)
      : setMenuDesktop(true)
  }

  React.useEffect(() => {
    getWindowSize()
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [menuDesktop]);

  return (
    <>
      {menuDesktop ? <MenuDesktop /> : <MenuMobile />}
    </>
  )
}
