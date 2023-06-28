'use client'
import React, { use } from 'react'
import { Section } from '@/section'
import {
  Container,
  HeadingAnimated,
  HeadingGroup,
  ImgAnimated,
  ImgGroup,
  List,
  TextAnimated,
  TextGroup,
  Text,
  Heading
} from '@/ui'
import dp3 from 'public/assets/image/depro/dp3.webp'
import dp4 from 'public/assets/image/depro/dp4.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'
import { firebaseApi } from '@/firebase'

export function HomeThree() {

  const [content, setContent] = React.useState<any>()

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebaseApi.getContent('home-page', 'environment')
      setContent(response)
    }

    getData()
  }, [])


  // const content = use(firebaseApi.getContent('home-page', 'environment'))

  return (
    <Section id='environment'>
      <Container>
        <Section.Head>
          <Section.Gap>
            <HeadingGroup variant='center'>
              <Heading>{content?.title}</Heading>
            </HeadingGroup>
            <TextGroup variant='center'>
              <Text variant='small'>{content?.text}</Text>
            </TextGroup>
            <TextGroup>
            </TextGroup>
          </Section.Gap>
        </Section.Head>

        <List variant='ultwo'>
          {React.Children.toArray(
            content?.blocks.map((block: string) => (
              <List.Li variant='litwo'>{block}</List.Li>
            ))
          )}
        </List>
      </Container>
    </Section>
  )
}
