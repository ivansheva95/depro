'use client'

import { firebaseApi } from '@/firebase'
import React, { use } from 'react'
import HomeGallery from './HomeGallery'

export const HomeGalleryContainer = () => {

  const [content, setContent] = React.useState<any>()
  const [images1, setImages1] = React.useState<any>()
  const [images2, setImages2] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await Promise.all([
        firebaseApi.getContent('home-page', 'portfolio'),
        firebaseApi.getImages('home-page/portfolio/project1'),
        firebaseApi.getImages('home-page/portfolio/project2')
      ])
      setContent(response[0])
      setImages1(response[1])
      setImages2(response[2])
    }

    getData()
  }, [])

  // const content = use(firebaseApi.getContent('home-page', 'portfolio'))
  // const images1 = use(firebaseApi.getImages('home-page/portfolio/project1'))
  // const images2 = use(firebaseApi.getImages('home-page/portfolio/project2'))
  return <HomeGallery content={content} images1={images1!} images2={images2!} />
}
