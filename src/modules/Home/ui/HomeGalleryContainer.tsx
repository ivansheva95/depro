import { firebaseApi } from '@/firebase'
import React, { use } from 'react'
import HomeGallery from './HomeGallery'

export const HomeGalleryContainer = () => {
  const content = use(firebaseApi.getContent('home-page', 'portfolio'))
  const images1 = use(firebaseApi.getImages('home-page/portfolio/project1'))
  const images2 = use(firebaseApi.getImages('home-page/portfolio/project2'))
  return <HomeGallery content={content} images1={images1!} images2={images2!} />
}
