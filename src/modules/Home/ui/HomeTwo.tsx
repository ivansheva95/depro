import React, { use } from 'react'
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
// import dp1 from 'public/assets/image/depro/dp1.webp'
// import dp2 from 'public/assets/image/depro/dp2.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import { firebaseApi } from '@/firebase'

export function HomeTwo() {
  const content = use(firebaseApi.getContent('home-page', 'depro'))

  return (
    <Section id='depro'>
      <Container>
        <Section.Gap>
          <Section.Head>
            <Section.Gap>
              <HeadingGroup variant='center'>
                <Heading tag='h2'>{content?.title}</Heading>
              </HeadingGroup>
              <TextGroup variant='center'>
                <Text variant='small'>
                  {content?.text}
                </Text>
              </TextGroup>
            </Section.Gap>
          </Section.Head>

          <List variant='ultwo'>
            {React.Children.toArray(
              content?.blocks.map((block: any) => (
                <List.Li variant='litwo'>
                  <Heading tag='h4'>{block?.title}</Heading>
                  <Section.Indent />
                  {block?.text}
                </List.Li>
              ))
            )}
          </List>
        </Section.Gap>
      </Container>
    </Section>
  )
}
