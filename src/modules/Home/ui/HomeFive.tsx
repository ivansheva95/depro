'use client'

import React, { use } from 'react'
import { Section } from '@/section'
import {
  Container,
  Heading,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  ImgGroup,
  List,
  Text,
  TextAnimated,
  TextGroup
} from '@/ui'
import dp12 from 'public/assets/image/depro/dp12.webp'
import dp13 from 'public/assets/image/depro/dp13.webp'
import dp14 from 'public/assets/image/depro/dp14.webp'
import dp15 from 'public/assets/image/depro/dp15.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import { firebaseApi } from '@/firebase'
import styles from './dots.module.scss'

export function HomeFive() {

  const [content, setContent] = React.useState<any>()
  const [images, setImages] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await Promise.all([
        firebaseApi.getContent('home-page', 'data'),
        firebaseApi.getImages('home-page/data'),
      ])
      setContent(response[0])
      setImages(response[1])
    }

    getData()
  }, [])

  // const content = use(firebaseApi.getContent('home-page', 'data'))
  // const images = use(firebaseApi.getImages('home-page/data'))

  return (
    <Section id='data'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={images!} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <Heading>{content?.title}</Heading>
              </HeadingGroup>
              <TextGroup variant='start'>
                <div className={styles.list}>
                  {React.Children.toArray(
                    content?.texts.map((text: string) => (
                      <div className={styles.item}>{text}</div>
                    ))
                  )}
                </div>
              </TextGroup>
              <TextGroup>
                <List>
                  {React.Children.toArray(
                    content?.blocks.map((block: string) => (
                      <List.Li>{block}</List.Li>
                    ))
                  )}
                </List>
              </TextGroup>
            </Section.Gap>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
