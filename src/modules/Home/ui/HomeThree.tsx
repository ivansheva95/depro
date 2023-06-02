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
  Text,
  Heading
} from '@/ui'
import dp3 from 'public/assets/image/depro/dp3.webp'
import dp4 from 'public/assets/image/depro/dp4.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'

export function HomeThree() {
  return (
    <Section id='environment'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <Heading>Интегрированная среда</Heading>
              </HeadingGroup>
              <TextGroup>
                <Text variant='small'> DePro является интегрированной средой потому, что в ней интегрированы все необходимые для эффективной разработки инструменты:</Text>
              </TextGroup>
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
          <ImgCarousel imgs={[dp3, dp4]} />
        </Section.Row>
      </Container>
    </Section>
  )
}
