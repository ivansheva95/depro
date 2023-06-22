import SupportList from '@/components/Cards/SupportCard/SupportList'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export function HomeSupport() {
  const content = use(firebaseApi.getContent('home-page', 'nocode'))
  return (
    <SupportList content={content} />
  )
}
