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
import dp12 from 'public/assets/image/depro/dp12.webp'
import dp13 from 'public/assets/image/depro/dp13.webp'
import dp14 from 'public/assets/image/depro/dp14.webp'
import dp15 from 'public/assets/image/depro/dp15.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'

export function HomeFive() {
  return (
    <Section id='data'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={[dp12, dp13, dp14, dp15]} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <Heading>Различные источники данных</Heading>
              </HeadingGroup>
              <TextGroup variant='start'>
                <Text variant='small'>Собственная серверная база данных; стороннее API;</Text>
                <Text variant='small'>локальная (на девайсе) база данных; </Text>
                <Text variant='small'>стороннее API;</Text>
                <Text variant='small'>данные, передаваемые с других экранов; </Text>
                <Text variant='small'>глобальные переменные и прочее.</Text>
              </TextGroup>
              <TextGroup>
                <List>
                  <List.Li>
                    Собственная серверная база данных может размещаться в любом месте, в частности: в облаке DePro, на собственном сервере, на сервере разработчика. В любое время можно осуществить миграцию бд.
                  </List.Li>
                  <List.Li>
                    В качестве собственной СУБД может использоваться любая SQL база данных. На сервере DePro используется PostgreSQL. В качестве локальной бд используется SQLite.
                  </List.Li>
                  <List.Li>
                    DePro позволяет описывать таблицы баз данных и связи между ними.
                  </List.Li>
                  <List.Li>
                    Имеется мощный no code редактор сложных запросов.
                  </List.Li>
                  <List.Li>
                    DePro предоставляет также удобную админку для ведения контента (просмотр и редактирование данных всех таблиц приложения).
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
