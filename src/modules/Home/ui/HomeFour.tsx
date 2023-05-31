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
              <ImgAnimated height={200} image={dp5} imageLabel='image' />
              <ImgAnimated height={200} image={dp6} imageLabel='image' />
            </ImgGroup>
          </Section.Column>
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>
                <HeadingAnimated tag='h3'>UX дизайн или пользовательский опыт определяет ЧТО должно делать приложение. От него зависит насколько эффективно и удобно будет работать пользователю с приложением.
                  DePro имеет полный набор инструментов для формирования качественного UX дизайна
                </HeadingAnimated>
              </HeadingGroup>
              <TextGroup>
                <Section.Indent />
                <List>
                  <List.LiAnimated>
                    Распределение по экранам компонентов и задание их свойств
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Широкий набор реакций приложения на действия пользователя (клик, двойной клик, длиный клик, свайп)
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Формирование прототипов компонентов на экранах в соответствии с требованиями Material Design и Human Interface Guidelines
                  </List.LiAnimated>
                  <List.LiAnimated>
                    Определение данных необходимых для каждого компонента и их источников.
                    Предоставлю одну – две картинки с DePro для иллюстрации UX дизайна
                  </List.LiAnimated>
                </List>
                {/* <Section.Indent />
              <HeadingAnimated tag='h3'>UX дизайн или пользовательский опыт определяет ЧТО должно делать приложение. От него зависит насколько эффективно и удобно будет работать пользователю с приложением.
                DePro имеет полный набор инструментов для формирования качественного UX дизайна
              </HeadingAnimated>
              <Section.Indent />
              <List>
                <List.LiAnimated>
                  Выбор палитры приложения с помощью цветового круга
                </List.LiAnimated>
                <List.LiAnimated>
                  Адаптивный дизайн обеспечивает хорошее представление данных на любых девайсах
                </List.LiAnimated>
                <List.LiAnimated>
                  Кроме технологии drag and drop предлагается возможность изменения размеров и расположения элементов в &#34;один клик&#34;
                </List.LiAnimated>
              </List> */}
              </TextGroup>
            </Section.Gap>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
