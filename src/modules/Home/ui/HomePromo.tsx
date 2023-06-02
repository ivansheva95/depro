import React from 'react'
import { Section } from '@/section'
import {
  Button,
  ButtonAnimated,
  ButtonGroup,
  Container,
  Heading,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  Text,
  TextAnimated,
  TextGroup
} from '@/ui'
import globus from 'public/assets/image/globus.webp'
import { ArrowRight } from '@/components'
import Link from 'next/link'
import BG from '@/ui/BG/BG'

export default function HomePromo() {
  return (
    <Section id='promo' variant='promo'>
      <Container>
        <Section.Row variant='title'>
          <Section.Column variant='title'>
            <Heading tag='h1'>
              Создай свое приложение вместе IDE DePro.
            </Heading>
            <Section.Indent />
            <TextGroup>
              <Text variant='small'>Интегрированная среда разработки мобильных приложений.</Text>
              <Text variant='small'>Быстро и дешево разрабатывать приложения любой сложности.</Text>
              <Text variant='small'>Просто для новичка, мощно для профессионалов.</Text>
            </TextGroup>
            <Section.Indent />
            <ButtonGroup>
              <Link href='https://youtu.be/51JklUB-21Q' target='_blank'>
                <Button>
                  Попробовать сейчас
                  <ArrowRight style={{ fontSize: '20px' }} />
                </Button>
              </Link>
            </ButtonGroup>
          </Section.Column>
        </Section.Row>
      </Container>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 50 }}>
        <Button variant='yellow'>Попробовать сейчас <ArrowRight style={{ fontSize: '20px' }} /></Button>
      </div>
    </Section >
  )
}
