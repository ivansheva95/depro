import React from 'react'
import { Section } from '@/section'
import {
  ButtonAnimated,
  ButtonGroup,
  Container,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  TextAnimated,
  TextGroup
} from '@/ui'
import globus from 'public/assets/image/globus.webp'
import { ArrowRight } from '@/components'
import Link from 'next/link'

export default function HomePromo() {
  return (
    <Section id='promo'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <HeadingGroup>
              <HeadingAnimated tag='h1'>IDE DePro</HeadingAnimated>
            </HeadingGroup>
            <Section.Indent />
            <TextGroup>
              <TextAnimated variant='small'>Интегрированная среда разработки мобильных приложений.</TextAnimated>
              <TextAnimated variant='small'>Быстро и дешево разрабатывать приложения любой сложности.</TextAnimated>
              <TextAnimated variant='small'>Просто для новичка, мощно для профессионалов.</TextAnimated>
            </TextGroup>
            <Section.Indent />
            <ButtonGroup>
              <Link href='https://youtu.be/51JklUB-21Q' target='_blank'>
                <ButtonAnimated>
                  Попробовать Демо
                  <ArrowRight style={{ fontSize: '20px' }} />
                </ButtonAnimated>
              </Link>
            </ButtonGroup>
          </Section.Column>
          <Section.Column variant='image-promo'>
            <ImgAnimated height={250} variant='standart' image={globus} imageLabel='globus' />
          </Section.Column>
        </Section.Row>
      </Container>
    </Section >
  )
}
