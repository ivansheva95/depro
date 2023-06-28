'use client'

import React, { use } from 'react'
import { Section } from '@/section'
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  HeadingGroup,
  ImgPromo,
  Text,
  TextGroup
} from '@/ui'
import { ArrowRight } from '@/components'
import Link from 'next/link'
import { firebaseApi } from '@/firebase'

export default function HomePromo() {

  const [content, setContent] = React.useState<any>()
  const [socials, setSocials] = React.useState<any>()
  const [image, setImage] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await Promise.all([
        firebaseApi.getContent('home-page', 'promo'),
        firebaseApi.getContent('contacts', 'socials'),
        firebaseApi.getImages('home-page/promo')
      ])
      setContent(response[0])
      setSocials(response[1])
      setImage(response[2])
    }

    getData()
  }, [])

  // const content = use(firebaseApi.getContent('home-page', 'promo'))
  // const socials = use(firebaseApi.getContent('contacts', 'socials'))
  // const image = use(firebaseApi.getImages('home-page/promo'))
  return (
    <Section id='promo' variant='promo'>
      <Section.Row variant='promoRow'>
        <Section.Column variant='content'>
          <Section.Gap>
            <HeadingGroup>
              <Heading tag='h1'>
                {content?.title.start} <span>{content?.title.color}</span>
              </Heading>
            </HeadingGroup>
            <TextGroup>
              {React.Children.toArray(
                content?.texts.map((text: string) => (
                  <Text variant='small'>{text}</Text>
                ))
              )}
            </TextGroup>
            <ButtonGroup>
              {socials && (
                <Link href={socials?.['youtube']} target='_blank'>
                  <Button>
                    {content?.buttons[0]}
                    <ArrowRight style={{ fontSize: '20px' }} />
                  </Button>
                </Link>
              )}
            </ButtonGroup>
          </Section.Gap>
        </Section.Column>
        <Section.Column variant='image-promo'>
          <ImgPromo image={image?.[0]} />
        </Section.Column>
      </Section.Row>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 50 }}>
        {socials && (
          <Link target='_blank' href={socials?.['site']}>
            <Button variant='yellow'>{content?.buttons[1]}</Button>
          </Link>
        )}
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: -10, clipPath: 'circle(50% at 0 0)', background: '#1dace9' }}>
      </div>
    </Section >
  )
}
