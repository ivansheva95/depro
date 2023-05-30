import React from 'react'
import { Section } from '@/section'
import {
  ButtonAnimated,
  ButtonGroup,
  Container,
  HeadingAnimated,
  ImgAnimated,
  TextAnimated,
  TextGroup
} from '@/ui'
import globus from 'public/assets/image/globus.webp'

export default function HomePromo() {
  return (
    <Section id='promo'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <TextGroup>
              <HeadingAnimated tag='h1'>IDE DePro</HeadingAnimated>
              <TextAnimated>Интегрированная среда разработки мобильных приложений.</TextAnimated>
              <TextAnimated>Быстро и дешево разрабатывать приложения любой сложности.</TextAnimated>
              <TextAnimated>Просто для новичка, мощно для профессионалов.</TextAnimated>
            </TextGroup>
            <Section.Indent />
            <ButtonGroup>
              <ButtonAnimated>Демо</ButtonAnimated>
            </ButtonGroup>
          </Section.Column>
          <Section.Column variant='image'>
            <ImgAnimated image={globus} imageLabel='globus' />
          </Section.Column>
        </Section.Row>
      </Container>
    </Section >
  )
}
