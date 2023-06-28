'use client'

import { Advantages } from '@/components'
import { firebaseApi } from '@/firebase'
import React, { use } from 'react'

export const HomeAdvantages = () => {
  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebaseApi.getContent('home-page', 'advantages')
      setContent(response)
    }

    getData()
  }, [])
  // const content = use(firebaseApi.getContent('home-page', 'advantages'))
  return <Advantages content={content} />
}
