import SmallCard from '@/components/Cards/SmallCard/ui/SmallCard'
import { Section } from '@/section'
import { Container, HeadingAnimated } from '@/ui'
import React from 'react'

export default function HomeCards() {
  return (
    <Section>
      <Container>
        <Section.Head>
          <HeadingAnimated>UX дизайн или пользовательский опыт определяет </HeadingAnimated>
          <Section.Indent />
        </Section.Head>

      </Container>
    </Section >
  )
}
