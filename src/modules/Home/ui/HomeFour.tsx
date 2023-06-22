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
import dp1 from 'public/assets/image/depro/dp1.webp'
import dp2 from 'public/assets/image/depro/dp2.webp'
import dp9 from 'public/assets/image/depro/dp9.webp'

import dp4 from 'public/assets/image/depro/dp4.webp'
import dp5 from 'public/assets/image/depro/dp5.webp'
import dp10 from 'public/assets/image/depro/dp10.webp'
import dp11 from 'public/assets/image/depro/dp11.webp'
import ImgCarousel from '@/components/ImgCarousel/ImgCarousel'
import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'

import img1 from 'public/assets/image/1.jpeg'
import img2 from 'public/assets/image/2.jpeg'
import img3 from 'public/assets/image/3.jpeg'
import img4 from 'public/assets/image/4.jpeg'
import { firebaseApi } from '@/firebase'

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
              {/* <TextGroup>
                <Text variant='small'>{content?.ux.text}</Text>
              </TextGroup> */}
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
              {/* <Text>{content?.ui.text}</Text> */}
            </TextGroup>
            <Section.Indent variant='big' />
            <Section.Gap>
              {React.Children.toArray(
                content?.ui.blocks.map((block: any) => (
                  <SmallCard title={block.title} text={block.text} />
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
