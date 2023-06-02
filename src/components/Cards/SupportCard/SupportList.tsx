import React from 'react'
import styles from './Support.module.scss'
import { Container, HeadingAnimated, Text, TextAnimated } from '@/ui'
import SupportCard from './SupportCard'

export default function SupportList() {
  return (
    <section className={styles.wrapper}>
      <Container>

        <div className={styles.head}>
          <HeadingAnimated>Первоклассная поддержка клиентов</HeadingAnimated>
          <TextAnimated>Решите любой вопрос с помощью наших специалистов. Экономьте время и сосредоточьтесь на создании своих приложений.</TextAnimated>
        </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <SupportCard />
          </div>
          <div className={styles.column}>
            <SupportCard />
          </div>
          <div className={styles.column}>
            <SupportCard />
          </div>
          <div className={styles.column}>
            <SupportCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
