import React from 'react'

import HomePromo from './HomePromo'
import { HomeTwo } from './HomeTwo'
import { HomeThree } from './HomeThree'
import { HomeFour } from './HomeFour'
import { HomeFive } from './HomeFive'
import { HomeContact } from './HomeContact'
import { HomeSix } from './HomeSix'
import HomeGallery from './HomeGallery'

export default function Home() {
  return (
    <>
      <HomePromo />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeGallery />
      <HomeContact />
    </>
  )
}
