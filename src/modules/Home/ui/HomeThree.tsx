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
        <Section.Head>
          <Section.Gap>
            <HeadingGroup>
              <Heading>Интегрированная среда</Heading>
            </HeadingGroup>
            <TextGroup>
              <Text variant='small'> DePro является интегрированной средой потому, что в ней интегрированы все необходимые для эффективной разработки инструменты:</Text>
            </TextGroup>
            <TextGroup>
            </TextGroup>
          </Section.Gap>
        </Section.Head>

        <List variant='ultwo'>
          <List.Li variant='litwo'>UX редактор</List.Li>
          <List.Li variant='litwo'>UI редактор</List.Li>
          <List.Li variant='litwo'>Работа с БД (описание таблиц, формирование запросов)</List.Li>
          <List.Li variant='litwo'>Интеграция с другими сервисами</List.Li>
          <List.Li variant='litwo'>Генерирование кода</List.Li>
          <List.Li variant='litwo'>Компиляция и сборка приложений</List.Li>
          <List.Li variant='litwo'>Генерирование &#34;админки&#34; для формирования контента</List.Li>
          <List.Li variant='litwo'>Управление разработкой</List.Li>
        </List>
      </Container>
    </Section>
  )
}
