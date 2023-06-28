'use client'

import { Prices } from '@/components'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export const HomePrices = () => {

  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebaseApi.getContent('home-page', 'prices')
      setContent(response)
    }

    getData()
  }, [])

  // const content = use(firebaseApi.getContent('home-page', 'prices'))
  return <Prices content={content} />
}
