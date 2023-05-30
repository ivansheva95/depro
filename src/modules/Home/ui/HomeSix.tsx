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
          {/* <Section.Column variant='image'>
            <ImgGroup>
              <ImgAnimated height={200} image={image} imageLabel='image' />
              <ImgAnimated height={200} image={image} imageLabel='image' />
            </ImgGroup>
          </Section.Column> */}
          <Section.Column variant='content'>
            <TextGroup>
              <List>
                <List.LiAnimated>
                  Нет кода – нет проблем
                </List.LiAnimated>
                <List.LiAnimated>
                  На сервере автоматически генерируется код на основании принятых UX / UI решений  для каждой платформы. Это позволяет получать понастоящему нативные приложения, а не разные суррогаты типа React native и PWA.
                </List.LiAnimated>
                <List.LiAnimated>
                  Приложения можно размещать на Google Play Store и Apple App Store. Кроме того приложения можно размещать в альтернативных магазинах приложений типа GetJar, Amazon AppStore, Appland и пр.
                </List.LiAnimated>
                <List.LiAnimated>
                  Нативное приложение - нативная производительность, функциональность и плавность работы.
                </List.LiAnimated>
                <List.LiAnimated>
                  Проект принадлежит заказчику. И его работоспособность не зависит от оплаты аккаунта. Оплата нужна только на период разработки
                </List.LiAnimated>
              </List>
            </TextGroup>
          </Section.Column>
        </Section.Row>
      </Container>
    </Section>
  )
}
