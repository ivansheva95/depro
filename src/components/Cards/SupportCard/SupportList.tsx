import React from 'react'
import styles from './Support.module.scss'
import { Container, Heading, HeadingAnimated, Text, TextAnimated } from '@/ui'
import SupportCard from './SupportCard'

type Props = {
  content: any
}

export default function SupportList({ content }: Props) {
  return (
    <section className={styles.wrapper}>
      <Container>

        <div className={styles.head}>
          <Heading>{content?.title}</Heading>
        </div>

        <div className={styles.row}>
          {React.Children.toArray(
            content?.blocks.map((block: any) => (
              <div className={styles.column}>
                <SupportCard title={block?.title} text={block?.text} />
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  )
}
