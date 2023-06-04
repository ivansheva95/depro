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
            <HeadingGroup>
              <Heading tag='h1'>
                Создай свое приложение без написания кода с <span>IDE DePro</span>
              </Heading>
            </HeadingGroup>
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
                  Демо
                  <ArrowRight style={{ fontSize: '20px' }} />
                </Button>
              </Link>
            </ButtonGroup>
            <Section.Indent variant='small' />
          </Section.Column>
        </Section.Row>
      </Container>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 50 }}>
        <Link target='_blank' href='https://ide.dp-ide.com/'>
          <Button variant='yellow'>Попробовать</Button>
        </Link>
      </div>
    </Section >
  )
}
