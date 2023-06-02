import React from 'react'
import { Section } from '@/section'
import {
  Container,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  ImgGroup,
  List,
  TextAnimated,
  TextGroup,
  Text
} from '@/ui'
import dp3 from 'public/assets/image/depro/dp3.webp'
import dp4 from 'public/assets/image/depro/dp4.webp'

export function HomeThree() {
  return (
    <Section id='three'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <HeadingAnimated tag='h2'>DePro является интегрированной средой потому</HeadingAnimated>
              </HeadingGroup>
              <TextAnimated>DePro позволяет быстро разрабатывать </TextAnimated>
              <TextGroup>
                <List>
                  <List.Li>UX редактор</List.Li>
                  <List.Li>UI редактор</List.Li>
                  <List.Li>Работа с БД (описание таблиц, формирование запросов)</List.Li>
                  <List.Li>Интеграция с другими сервисами</List.Li>
                  <List.Li>Генерирование кода</List.Li>
                  <List.Li>Компиляция и сборка приложений</List.Li>
                  <List.Li>Генерирование &#34;админки&#34; для формирования контента</List.Li>
                  <List.Li>Управление разработкой</List.Li>
                </List>
              </TextGroup>
            </Section.Gap>
          </Section.Column>
          <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated image={dp3} imageLabel='image' />
              <ImgAnimated image={dp4} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
