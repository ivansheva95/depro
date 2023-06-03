'use client'

import { Gallery } from '@/components'
import { Section } from '@/section'
import { Container, Heading, HeadingAnimated, HeadingGroup, Text, TextGroup } from '@/ui'
import React from 'react'
import styles from './HomeGallery.module.scss'
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
import { motion } from 'framer-motion'

export default function HomeGallery() {

  const [swiper, setSwiper] = React.useState(true)

  const getWindowSize = () => {
    window.innerWidth < 768
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
            className={styles.card}
          >
            <div style={{ textAlign: 'center' }}>
              <Text> СкладТехника</Text>
              <Section.Indent />
              <Text variant='small'>Мобильное приложение «СМС» информирует пользователя о оборудовании и услугах, которые предоставляет компания «Системы модернизации складов»</Text>
            </div>
            <Section.Indent variant='big' />

            {swiper
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
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: .3 } }}
                  viewport={{ amount: 0.1, once: true }}
                  className={styles.container}
                >
                  <div className={styles.item}><Image src={com11} alt='img' /></div>
                  <div className={styles.item}><Image src={com12} alt='img' /></div>
                  <div className={styles.item}><Image src={com13} alt='img' /></div>
                  <div className={styles.item}><Image src={com14} alt='img' /></div>
                  <div className={styles.item}><Image src={com15} alt='img' /></div>
                </motion.div>
              )
            }

          </div>
          <div
            className={styles.card}
          >
            <div style={{ textAlign: 'center' }}>
              <Text>Крон авто</Text>
              <Section.Indent />
              <Text variant='small'>Онлайн-кабинет компании “Крон” - это независимый полноценный бизнес-инструмент, созданный для оптимизации, упрощения и облегчения рабочих процессов.</Text>
            </div>
            <Section.Indent variant='big' />

            {swiper
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
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: .3 } }}
                  viewport={{ amount: 0.1, once: true }}
                  className={styles.container}
                >
                  <div className={styles.item}><Image src={com21} alt='img' /></div>
                  <div className={styles.item}><Image src={com22} alt='img' /></div>
                  <div className={styles.item}><Image src={com23} alt='img' /></div>
                  <div className={styles.item}><Image src={com24} alt='img' /></div>
                  <div className={styles.item}><Image src={com25} alt='img' /></div>
                  <div className={styles.item}><Image src={com26} alt='img' /></div>
                  <div className={styles.item}><Image src={com27} alt='img' /></div>
                  <div className={styles.item}><Image src={com28} alt='img' /></div>
                  <div className={styles.item}><Image src={com29} alt='img' /></div>
                </motion.div>
              )
            }
          </div>
        </Section.Row>
      </Container>
    </Section >
  )
}
