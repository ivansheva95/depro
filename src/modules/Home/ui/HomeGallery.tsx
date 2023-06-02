'use client'

import { Gallery } from '@/components'
import { Section } from '@/section'
import { Container, Heading, HeadingAnimated, HeadingGroup, Text, TextGroup } from '@/ui'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dp7 from 'public/assets/image/depro/dp1.webp'

import com11 from 'public/assets/image/com1/com1-1.webp'
import com12 from 'public/assets/image/com1/com1-2.webp'
import com13 from 'public/assets/image/com1/com1-3.webp'
import com14 from 'public/assets/image/com1/com1-4.webp'
import com15 from 'public/assets/image/com1/com1-5.webp'

import com21 from 'public/assets/image/com2/com2-1.webp'
import com22 from 'public/assets/image/com2/com2-2.webp'
import com23 from 'public/assets/image/com2/com2-3.webp'
import com24 from 'public/assets/image/com2/com2-4.webp'
import com25 from 'public/assets/image/com2/com2-5.webp'
import com26 from 'public/assets/image/com2/com2-6.webp'
import com27 from 'public/assets/image/com2/com2-7.webp'
import com28 from 'public/assets/image/com2/com2-8.webp'
import com29 from 'public/assets/image/com2/com2-9.webp'

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
    <Section id='portfolio'>
      <Container>
        <Section.Head>
          <HeadingGroup variant='center'>
            <Heading>Портфолио</Heading>
            <Section.Indent variant='big' />
          </HeadingGroup>
        </Section.Head>
        <Section.Row variant='col'>
          <div
            style={{ padding: '10px', border: '2px solid white', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 0 5px white' }}
          // style={{ marginBottom: '50px' }}
          >
            <TextGroup>
              <Text> СкладТехника</Text>
              <Section.Indent />
              <Text variant='small'>Мобильное приложение «СМС» информирует пользователя о оборудовании и услугах, которые предоставляет компания «Системы модернизации складов»</Text>
            </TextGroup>
            <Section.Indent variant='big' />

            <Gallery>
              <Gallery.Card><Image src={com11} alt='img' /></Gallery.Card>
              {/* <Gallery.Card><Image src={com12} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com13} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com14} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com15} alt='img' /></Gallery.Card> */}
            </Gallery>

            {/* {swiper
              ? (
                <Gallery>
                  <Gallery.Card><Image src={com11} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com12} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com13} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com14} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com15} alt='img' /></Gallery.Card>
                </Gallery>
              )
              : (
                <div style={{ width: '100%' }}>
                  <Swiper
                    style={{ height: '300px', overflow: 'hidden' }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide><Image src={com11} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com12} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com13} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com14} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com15} alt='img' /></SwiperSlide>
                  </Swiper>
                </div>
              )
            } */}

          </div>
          <div style={{ padding: '20px', border: '2px solid white', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 0 5px white' }}>
            <TextGroup>
              <Text>Крон авто</Text>
              <Section.Indent />
              <Text variant='small'>Онлайн-кабинет компании “Крон” - это независимый полноценный бизнес-инструмент, созданный для оптимизации, упрощения и облегчения рабочих процессов.</Text>
            </TextGroup>
            <Section.Indent variant='big' />

            <Gallery>
              <Gallery.Card><Image src={com21} alt='img' /></Gallery.Card>
              {/* <Gallery.Card><Image src={com22} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com23} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com24} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com25} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com26} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com27} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com28} alt='img' /></Gallery.Card>
              <Gallery.Card><Image src={com29} alt='img' /></Gallery.Card> */}
            </Gallery>

            {/* {swiper
              ? (
                <Gallery>
                  <Gallery.Card><Image src={com21} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com22} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com23} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com24} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com25} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com26} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com27} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com28} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com29} alt='img' /></Gallery.Card>
                </Gallery>
              )
              : (
                <div style={{ width: '100%' }}>
                  <Swiper
                    style={{ height: '300px', overflow: 'hidden' }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide><Image src={com21} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com22} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com23} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com24} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com25} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com26} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com27} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com28} alt='img' /></SwiperSlide>
                    <SwiperSlide><Image src={com29} alt='img' /></SwiperSlide>
                  </Swiper>
                </div>
              )
            } */}

          </div>
        </Section.Row>
      </Container>
    </Section >
  )
}
