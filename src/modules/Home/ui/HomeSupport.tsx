'use client'

import SupportList from '@/components/Cards/SupportCard/SupportList'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export function HomeSupport() {

  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebaseApi.getContent('home-page', 'nocode')
      setContent(response)
    }

    getData()
  }, [])

  // const content = use(firebaseApi.getContent('home-page', 'nocode'))
  return (
    <SupportList content={content} />
  )
}
