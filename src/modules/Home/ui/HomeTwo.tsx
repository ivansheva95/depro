import React from 'react'
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
import dp1 from 'public/assets/image/depro/dp1.webp'
import dp2 from 'public/assets/image/depro/dp2.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'

export function HomeTwo() {
  return (
    <Section id='depro'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={[dp1, dp2]} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <Heading tag='h2'>Почему IDE DePro?</Heading>
              </HeadingGroup>
              <TextGroup>
                <Text variant='small'>DePro позволяет упростить процесс создания приложений, и имеет ряд преимуществ перед конкурентами:</Text>
              </TextGroup>
              <TextGroup>
                <List>
                  <List.Li>
                    <Heading tag='h3'>Любая сложность</Heading>
                    <Section.Indent />
                    DePro позволяет быстро разрабатывать приложения практически любой сложности, в том числе тех приложений, которые сейчас разрабатываются только на коде.
                  </List.Li>
                  <List.Li>
                    <Heading tag='h3'>Скорость</Heading>
                    <Section.Indent />
                    Можете быстро создать MVP, а затем масштабировать и развивать его до совершенства.
                  </List.Li>
                  <List.Li>
                    <Heading tag='h3'>Масштабируемость без ограничений</Heading>
                    <Section.Indent />
                    Масштабируемость без ограничений. Использование одного инструмента для разработки приложений разной сложности существенно упрощает масштабирование.
                  </List.Li>
                  <List.Li>
                    <Heading tag='h3'>Упрощение</Heading>
                    <Section.Indent />
                    Уменьшите свой стек технологий. Наличие в DePro мощного блока для работы с данным позволяет отказаться от сторонних инструментов типа Airtable, Xano
                  </List.Li>
                  <List.Li>
                    <Heading tag='h3'>Простота и легкий вход</Heading>
                    <Section.Indent />
                    Простота использования и короткое время обучения. При последующем увеличении сложности проекта вы постепенно используете необходимые возможности DePro.
                  </List.Li>
                </List>
              </TextGroup>
            </Section.Gap>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
