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
import dp5 from 'public/assets/image/depro/dp5.webp'
import dp6 from 'public/assets/image/depro/dp6.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'

export function HomeFour() {
  return (
    <Section id='design'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={[dp5, dp6]} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <Heading>UX / UI дизайн</Heading>
              </HeadingGroup>
              <TextGroup>
                <Text variant='small'>UX дизайн или пользовательский опыт определяет ЧТО должно делать приложение. От него зависит насколько эффективно и удобно будет работать пользователю с приложением.
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
        <Section.Indent variant='big' />
        <Section.Head>
          <TextGroup>
            <Text>UI дизайн определяет насколько красиво будет выглядеть приложение. DePro предоставляет большой набор инструментов для оформления приложения.</Text>
          </TextGroup>
        </Section.Head>
        <Section.Indent />
        <Section.Row variant='cards'>
          <Section.Column variant='twoCards'>
            <SmallCard title='UI дизайн ' text='Определяет насколько красиво будет выглядеть приложение. DePro предоставляет большой набор инструментов для оформления приложения.' />
          </Section.Column>

          <Section.Column variant='twoCards'>
            <SmallCard title='Палитра' text='Выбор палитры приложения с помощью цветового круга' />
          </Section.Column>

          <Section.Column variant='twoCards'>
            <SmallCard title='Адаптивный дизайн' text='Адаптивный дизайн обеспечивает хорошее представление данных на любых девайсах' />
          </Section.Column>

          <Section.Column variant='twoCards'>
            <SmallCard title='Технологии ' text='Кроме технологии drag and drop предлагается возможность изменения размеров и расположения элементов в "один клик"' />
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
