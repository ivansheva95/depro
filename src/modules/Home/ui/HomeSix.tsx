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
import image from 'public/assets/image/dp1.webp'

export function HomeSix() {
  return (
    <Section id='six'>
      <Container>
        <Section.Row>
          <Section.Column variant='content'>
            <TextGroup>
              <List>
                <List.Li>
                  Нет кода – нет проблем
                </List.Li>
                <List.Li>
                  На сервере автоматически генерируется код на основании принятых UX / UI решений  для каждой платформы. Это позволяет получать понастоящему нативные приложения, а не разные суррогаты типа React native и PWA.
                </List.Li>
                <List.Li>
                  Приложения можно размещать на Google Play Store и Apple App Store. Кроме того приложения можно размещать в альтернативных магазинах приложений типа GetJar, Amazon AppStore, Appland и пр.
                </List.Li>
                <List.Li>
                  Нативное приложение - нативная производительность, функциональность и плавность работы.
                </List.Li>
                <List.Li>
                  Проект принадлежит заказчику. И его работоспособность не зависит от оплаты аккаунта. Оплата нужна только на период разработки
                </List.Li>
              </List>
            </TextGroup>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
