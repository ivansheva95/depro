import React from 'react'
import { Section } from '@/section'
import {
  Container,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  ImgGroup,
  List,
  Text,
  TextAnimated,
  TextGroup
} from '@/ui'
import dp1 from 'public/assets/image/depro/dp1.webp'
import dp2 from 'public/assets/image/depro/dp2.webp'

export function HomeTwo() {
  return (
    <Section id='two'>
      <Container>
        <Section.Row>
          <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated image={dp1} imageLabel='image' />
              <ImgAnimated image={dp2} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <HeadingAnimated tag='h2'>DePro является интегрированной средой потому, что в ней интегрированы </HeadingAnimated>
              </HeadingGroup>
              <TextAnimated>DePro позволяет быстро разрабатывать </TextAnimated>
              <TextGroup>
                <List>
                  <List.LiAnimated>
                    DePro позволяет быстро разрабатывать приложения практически любой сложности, в том числе тех приложений, которые сейчас разрабатываются только на коде.
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Можете быстро создать MVP, а затем масштабировать и развивать его до совершенства.
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Масштабируемость без ограничений. Использование одного инструмента для разработки приложений разной сложности существенно упрощает масштабирование.
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Уменьшите свой стек технологий. Наличие в DePro мощного блока для работы с данным позволяет отказаться от сторонних инструментов типа Airtable, Xano
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Простота использования и короткое время обучения. При последующем увеличении сложности проекта вы постепенно используете необходимые возможности DePro.
                  </List.LiAnimated>
                </List>
              </TextGroup>
            </Section.Gap>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
