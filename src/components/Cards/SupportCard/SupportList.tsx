import React from 'react'
import styles from './Support.module.scss'
import { Container, Heading, HeadingAnimated, Text, TextAnimated } from '@/ui'
import SupportCard from './SupportCard'

import img1 from 'public/assets/image/1.jpeg'
import img2 from 'public/assets/image/2.jpeg'
import img3 from 'public/assets/image/3.jpeg'
import img4 from 'public/assets/image/4.jpeg'

export default function SupportList() {
  return (
    <section className={styles.wrapper}>
      <Container>

        <div className={styles.head}>
          <Heading>Нет кода – нет проблем</Heading>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <SupportCard src={img1} title='Автоматическая генерация кода' text='На сервере автоматически генерируется код на основании принятых UX / UI решений  для каждой платформы. Это позволяет получать понастоящему нативные приложения, а не разные суррогаты типа React native и PWA.' />
          </div>
          <div className={styles.column}>
            <SupportCard src={img2} title='Google Play Store и Apple ' text='Приложения можно размещать на Google Play Store и Apple App Store. Кроме того приложения можно размещать в альтернативных магазинах приложений типа GetJar, Amazon AppStore, Appland и пр.' />
          </div>
          <div className={styles.column}>
            <SupportCard src={img3} title='Нативное приложение ' text='нативная производительность, функциональность и плавность работы.' />
          </div>
          <div className={styles.column}>
            <SupportCard src={img4} title='Проект принадлежит заказчику' text='И его работоспособность не зависит от оплаты аккаунта. Оплата нужна только на период разработки' />
          </div>
        </div>
      </Container>
    </section>
  )
}
