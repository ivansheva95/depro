import React from 'react'

import HomePromo from './HomePromo'
import { HomeTwo } from './HomeTwo'
import { HomeThree } from './HomeThree'
import { HomeFour } from './HomeFour'
import { HomeFive } from './HomeFive'
import { HomeContact } from './HomeContact'
import HomeGallery from './HomeGallery'
import { HomeSupport } from './HomeSupport'
import { HomeAdvantages } from './HomeAdvantages'
import { HomePrices } from './HomePrices'

export default function Home() {
  return (
    <>
      <HomePromo />
      <HomeTwo />
      <HomeAdvantages />
      <HomeFour />
      <HomeFive />
      <HomePrices />
      <HomeSupport />
      <HomeThree />
      <HomeContact />
      <HomeGallery />
    </>
  )
}
