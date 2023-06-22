import { Prices } from '@/components'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export const HomePrices = () => {
  const content = use(firebaseApi.getContent('home-page', 'prices'))
  return <Prices content={content} />
}
