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
  TextGroup
} from '@/ui'
import dp7 from 'public/assets/image/depro/dp7.webp'
import dp8 from 'public/assets/image/depro/dp8.webp'

export function HomeFive() {
  return (
    <Section id='five'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <HeadingAnimated tag='h2'>DePro является интегрированной средой потому, что в ней интегрированы </HeadingAnimated>
              </HeadingGroup>
              <TextAnimated>DePro позволяет быстро разрабатывать </TextAnimated>
              <TextGroup>
                <List>
                  <List.Li>
                    Компоненты могут использовать различные источники данных: собственная серверная база данных; локальная (на девайсе) база данных; стороннее API; данные, передаваемые с других экранов; глобальные переменные и прочее.
                  </List.Li>
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
          <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated image={dp7} imageLabel='image' />
              <ImgAnimated image={dp8} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
