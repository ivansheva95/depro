import React from 'react'
import styles from './Prices.module.scss'
import { Container, Heading, HeadingGroup } from '@/ui'

type Props = {
  content: any
}

export const Prices = ({ content }: Props) => {
  return (
    <section id='prices' className={styles.outer}>
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
                    <div className={styles.rate}>
                      <h3>{block.rate[0]}</h3>
                      <h2>{block.rate[1]}</h2>
                    </div>
                    <div className={styles.advantages}>
                      {React.Children.toArray(
                        block.advantages.map((a: any) => (
                          <div className={styles.item}>{a}</div>
                        ))
                      )}
                      {block.list && React.Children.toArray(
                        block.list.map((l: any) => (
                          <div className={styles.item}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                            {l}
                          </div>
                        ))
                      )}
                    </div>
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
