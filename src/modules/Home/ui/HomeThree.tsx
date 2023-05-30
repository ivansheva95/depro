import React from 'react'
import { Section } from '@/section'
import {
  Container,
  HeadingAnimated,
  ImgAnimated,
  ImgGroup,
  List,
  TextAnimated,
  TextGroup
} from '@/ui'
import dp3 from 'public/assets/image/depro/dp3.webp'
import dp4 from 'public/assets/image/depro/dp4.webp'

export function HomeThree() {
  return (
    <Section id='three'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <TextGroup>
              <TextAnimated>DePro является интегрированной средой потому, что в ней интегрированы все необходимые для эффективной разработки инструменты:</TextAnimated>
              <Section.Indent />
              <List>
                <List.LiAnimated>UX редактор</List.LiAnimated>
                <List.LiAnimated>UI редактор</List.LiAnimated>
                <List.LiAnimated>Работа с БД (описание таблиц, формирование запросов)</List.LiAnimated>
                <List.LiAnimated>Интеграция с другими сервисами</List.LiAnimated>
                <List.LiAnimated>Генерирование кода</List.LiAnimated>
                <List.LiAnimated>Компиляция и сборка приложений</List.LiAnimated>
                <List.LiAnimated>Генерирование &#34;админки&#34; для формирования контента</List.LiAnimated>
                <List.LiAnimated>Управление разработкой</List.LiAnimated>
              </List>
            </TextGroup>
          </Section.Column>
          <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated height={200} image={dp3} imageLabel='image' />
              <ImgAnimated height={200} image={dp4} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
