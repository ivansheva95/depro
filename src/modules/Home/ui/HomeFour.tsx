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
import dp5 from 'public/assets/image/depro/dp5.webp'
import dp6 from 'public/assets/image/depro/dp6.webp'

export function HomeFour() {
  return (
    <Section id='four'>
      <Container>
        <Section.Row>
          <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated image={dp5} imageLabel='image' />
              <ImgAnimated image={dp6} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <HeadingAnimated tag='h2'>UX дизайн или пользовательский опыт определяет ЧТО должно делать приложение.
                </HeadingAnimated>
              </HeadingGroup>
              <TextAnimated>DePro позволяет быстро разрабатывать </TextAnimated>
              <TextGroup>
                <List>
                  <List.Li>
                    Распределение по экранам компонентов и задание их свойств
                  </List.Li>
                  <List.Li>
                    Широкий набор реакций приложения на действия пользователя (клик, двойной клик, длиный клик, свайп)
                  </List.Li>
                  <List.Li>
                    Формирование прототипов компонентов на экранах в соответствии с требованиями Material Design и Human Interface Guidelines
                  </List.Li>
                  <List.Li>
                    Определение данных необходимых для каждого компонента и их источников.
                    Предоставлю одну – две картинки с DePro для иллюстрации UX дизайна
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
