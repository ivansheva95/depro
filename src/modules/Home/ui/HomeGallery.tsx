'use client'

import { Gallery } from '@/components'
import { Section } from '@/section'
import { Container, HeadingAnimated, HeadingGroup } from '@/ui'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dp7 from 'public/assets/image/depro/dp7.webp'
import dp8 from 'public/assets/image/depro/dp8.webp'
import Image from 'next/image'

export default function HomeGallery() {

  const [swiper, setSwiper] = React.useState(true)

  const getWindowSize = () => {
    window.innerWidth < 1024
      ? setSwiper(false)
      : setSwiper(true)
  }

  React.useEffect(() => {
    getWindowSize()
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [swiper]);

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

            {swiper
              ? (
                <Gallery>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                </Gallery>
              )
              : (
                <Swiper
                  style={{ height: '300px' }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                </Swiper>
              )
            }

          </div>
          <div style={{ width: '100%' }}>
            <HeadingGroup variant='center'>
              <HeadingAnimated >Крон авто
                Онлайн-кабинет компании “Крон” - это независимый полноценный бизнес-инструмент, созданный для оптимизации, упрощения и облегчения рабочих процессов.
              </HeadingAnimated>
            </HeadingGroup>
            <Section.Indent variant='big' />

            {swiper
              ? (
                <Gallery>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={dp7} alt='img' /></Gallery.Card>
                </Gallery>
              )
              : (
                <Swiper
                  style={{ height: '300px' }}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                  <SwiperSlide><Image src={dp8} alt='img' /></SwiperSlide>
                </Swiper>
              )
            }

          </div>
        </Section.Row>
      </Container>
    </Section >
  )
}
