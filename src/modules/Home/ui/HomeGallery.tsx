import { Gallery } from '@/components'
import { Section } from '@/section'
import { Container, HeadingAnimated, HeadingGroup } from '@/ui'
import React from 'react'

import dp7 from 'public/assets/image/depro/dp7.webp'
import dp8 from 'public/assets/image/depro/dp8.webp'
import Image from 'next/image'

export default function HomeGallery() {
  return (
    <Section>
      <Container>
        <Section.Row variant='col'>
          <div style={{ width: '100%', marginBottom: '50px' }}>
            <HeadingGroup variant='center'>
              <HeadingAnimated> СкладТехника
                Мобильное приложение «СМС» информирует пользователя о оборудовании и услугах, которые предоставляет компания «Системы модернизации складов»
              </HeadingAnimated>
            </HeadingGroup>
            <Section.Indent variant='big' />
            <Gallery>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
            </Gallery>
          </div>
          <div style={{ width: '100%' }}>
            <HeadingGroup variant='center'>
              <HeadingAnimated >Крон авто
                Онлайн-кабинет компании “Крон” - это независимый полноценный бизнес-инструмент, созданный для оптимизации, упрощения и облегчения рабочих процессов.
              </HeadingAnimated>
            </HeadingGroup>
            <Section.Indent variant='big' />
            <Gallery>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
            </Gallery>
          </div>
        </Section.Row>
      </Container>
    </Section>
  )
}
