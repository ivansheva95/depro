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
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'
import { firebaseApi } from '@/firebase'

import image1 from 'public/assets/image/1.png'
import image2 from 'public/assets/image/2.png'
import image3 from 'public/assets/image/3.png'

type Images = 0 | 1 | 2
const images = {
  0: image1,
  1: image2,
  2: image3
}

export function HomeFour() {
  const content = use(firebaseApi.getContent('home-page', 'design'))
  const ux = use(firebaseApi.getImages('home-page/design/ux'))
  const ui = use(firebaseApi.getImages('home-page/design/ui'))

  return (
    <Section id='design'>
      <Container>
        <Section.Row>
          <ImgCarousel imgs={ux!} />
          <Section.Column variant='content'>
            <Section.Gap>
              <HeadingGroup>

                <Heading>{content?.title}</Heading>
                <Section.Indent />
                <Heading tag='h4'>{content?.ux.title}</Heading>
              </HeadingGroup>
              <TextGroup>
                <Text variant='small'>{content?.ux.text}</Text>
              </TextGroup>
              <TextGroup>
                <List>
                  {React.Children.toArray(
                    content?.ux.blocks.map((block: any) => (
                      <List.Li>{block}</List.Li>
                    ))
                  )}
                </List>
              </TextGroup>
            </Section.Gap>
          </Section.Column>
        </Section.Row>
        <div style={{ padding: '40px' }}></div>

        <Section.Row>
          <Section.Column variant='content'>
            <TextGroup>
              <Heading tag='h4'>{content?.ui.title}</Heading>
              <Section.Indent />
              <Text>{content?.ui.text}</Text>
            </TextGroup>
            <Section.Indent variant='big' />
            <Section.Gap>
              {React.Children.toArray(
                content?.ui.blocks.map((block: any, index: Images) => (
                  <SmallCard src={images[index]} title={block.title} text={block.text} />
                ))
              )}
            </Section.Gap>
          </Section.Column>
          <ImgCarousel imgs={ui!} />
        </Section.Row>
      </Container>
    </Section>
  )
}
