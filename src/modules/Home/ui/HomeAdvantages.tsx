import { Advantages } from '@/components'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export const HomeAdvantages = () => {
  const content = use(firebaseApi.getContent('home-page', 'advantages'))
  return <Advantages content={content} />
}
