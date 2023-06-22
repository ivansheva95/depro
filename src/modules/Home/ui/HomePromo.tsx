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
  const content = use(firebaseApi.getContent('home-page', 'promo'))
  const socials = use(firebaseApi.getContent('contacts', 'socials'))
  const image = use(firebaseApi.getImages('home-page/promo'))
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
            {/* <Section.Indent /> */}
            <TextGroup>
              {React.Children.toArray(
                content?.texts.map((text: string) => (
                  <Text variant='small'>{text}</Text>
                ))
              )}
            </TextGroup>
            {/* <Section.Indent /> */}
            <ButtonGroup>
              <Link href={socials?.['youtube']} target='_blank'>
                <Button>
                  {content?.buttons[0]}
                  <ArrowRight style={{ fontSize: '20px' }} />
                </Button>
              </Link>
            </ButtonGroup>
          </Section.Gap>
        </Section.Column>
        <Section.Column variant='image-promo'>
          <ImgPromo image={image?.[0]} />
          {/* <Image style={{ borderRadius: '20px', boxShadow: '0 0 10px var(--color-blue1)' }} src={promo2} alt='img' placeholder='blur' /> */}
        </Section.Column>
      </Section.Row>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 50 }}>
        <Link target='_blank' href={socials?.['site']}>
          <Button variant='yellow'>{content?.buttons[1]}</Button>
        </Link>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: -10, clipPath: 'circle(50% at 0 0)', background: '#1dace9' }}>
      </div>
    </Section >
  )
}
