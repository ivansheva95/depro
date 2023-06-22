import React from 'react'
import styles from './Advantages.module.scss'
import { Container, Heading, HeadingGroup, Text } from '@/ui'

type Props = {
  content: any
}

export const Advantages = ({ content }: Props) => {
  return (
    <section className={styles.outer}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.head}>
            <HeadingGroup variant='center'>
              <Heading>{content?.title}</Heading>
            </HeadingGroup>
          </div>
          <div className={styles.row}>

            {React.Children.toArray(
              content?.blocks.map((block: any) => (
                <div className={styles.column}>
                  <div className={styles.card}>
                    <Heading tag='h4'>{block?.title}</Heading>
                    {React.Children.toArray(
                      block?.texts.map((text: string) => (
                        <Text variant='small'>{text}</Text>
                      ))
                    )}
                  </div>
                </div>
              ))
            )}

          </div>
        </div>
      </Container>
    </section>
  )
}
