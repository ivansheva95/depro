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
import dp9 from 'public/assets/image/depro/dp9.webp'

import dp4 from 'public/assets/image/depro/dp4.webp'
import dp5 from 'public/assets/image/depro/dp5.webp'
import dp10 from 'public/assets/image/depro/dp10.webp'
import dp11 from 'public/assets/image/depro/dp11.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'

import img1 from 'public/assets/image/1.jpeg'
import img2 from 'public/assets/image/2.jpeg'
import img3 from 'public/assets/image/3.jpeg'
import img4 from 'public/assets/image/4.jpeg'

export function HomeFour() {
  return (
    <Section id='design'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={[dp1, dp2, dp9]} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>

                <Heading>Дизайн</Heading>
                <Section.Indent />
                <Heading tag='h4'>UX дизайн</Heading>
              </HeadingGroup>
              <TextGroup>
                <Text variant='small'>или пользовательский опыт определяет ЧТО должно делать приложение. От него зависит насколько эффективно и удобно будет работать пользователю с приложением.
                  DePro имеет полный набор инструментов для формирования качественного UX дизайна:</Text>
              </TextGroup>
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
        <div style={{ padding: '40px' }}></div>

        <Section.Row>
          <Section.Column variant='content'>
            <TextGroup>
              <Heading tag='h4'>UI дизайн</Heading>
              <Section.Indent />
              <Text>определяет насколько красиво будет выглядеть приложение. DePro предоставляет большой набор инструментов для оформления приложения.</Text>
            </TextGroup>
            <Section.Indent variant='big' />
            <Section.Gap>
              <SmallCard src={img1} title='UI дизайн ' text='Определяет насколько красиво будет выглядеть приложение. DePro предоставляет большой набор инструментов для оформления приложения.' />
              <SmallCard src={img3} title='Палитра' text='Выбор палитры приложения с помощью цветового круга' />
              <SmallCard src={img2} title='Адаптивный дизайн' text='Адаптивный дизайн обеспечивает хорошее представление данных на любых девайсах' />
              <SmallCard src={img4} title='Технологии ' text='Кроме технологии drag and drop предлагается возможность изменения размеров и расположения элементов в "один клик"' />
            </Section.Gap>
          </Section.Column>
          <ImgCarousel imgs={[dp4, dp5, dp10, dp11]} />
        </Section.Row>
      </Container>
    </Section>
  )
}
