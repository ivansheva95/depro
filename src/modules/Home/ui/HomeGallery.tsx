'use client'

import { Gallery } from '@/components'
import { Section } from '@/section'
import { Container, Heading, HeadingAnimated, HeadingGroup, Text, TextGroup } from '@/ui'
import React from 'react'
import styles from './HomeGallery.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  content: any
  images1: Array<string>
  images2: Array<string>
}

export default function HomeGallery({ content, images1, images2 }: Props) {
  const [swiper, setSwiper] = React.useState(true)

  const getWindowSize = () => {
    window.innerWidth < 960
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
            <Heading>{content?.title}</Heading>
            <Section.Indent variant='big' />
          </HeadingGroup>
        </Section.Head>
        <Section.Row variant='col'>
          <div
            className={styles.card}
          >
            <div style={{ textAlign: 'center' }}>
              <Text>{content?.project1.title}</Text>
              <Section.Indent />
              <Text variant='small'>{content?.project1.text}</Text>
            </div>
            <Section.Indent variant='big' />

            {swiper
              ? (
                <Gallery>
                  {React.Children.toArray(
                    images1?.map(image => (
                      <Gallery.Card><Image src={image} alt='img' fill /></Gallery.Card>
                    ))
                  )}
                </Gallery>
              )
              : (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: .3 } }}
                  viewport={{ amount: 0.1, once: true }}
                  className={styles.container}
                >
                  {React.Children.toArray(
                    images1?.map(image => (
                      <div className={styles.item}><Image src={image} alt='img' fill /></div>
                    ))
                  )}
                </motion.div>
              )
            }

          </div>
          <div
            className={styles.card}
          >
            <div style={{ textAlign: 'center' }}>
              <Text>{content?.project2.title}</Text>
              <Section.Indent />
              <Text variant='small'>{content?.project2.text}</Text>
            </div>
            <Section.Indent variant='big' />

            {swiper
              ? (
                <Gallery>
                  {React.Children.toArray(
                    images2?.map(image => (
                      <Gallery.Card><Image src={image} alt='img' fill /></Gallery.Card>
                    ))
                  )}
                  {/* <Gallery.Card><Image src={com21} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com22} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com23} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com24} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com25} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com26} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com27} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com28} alt='img' /></Gallery.Card>
                  <Gallery.Card><Image src={com29} alt='img' /></Gallery.Card> */}
                </Gallery>
              )
              : (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, transition: { duration: .3 } }}
                  viewport={{ amount: 0.1, once: true }}
                  className={styles.container}
                >
                  {React.Children.toArray(
                    images2?.map(image => (
                      <div className={styles.item}><Image src={image} alt='img' fill /></div>
                    ))
                  )}
                  {/* <div className={styles.item}><Image src={com21} alt='img' /></div>
                  <div className={styles.item}><Image src={com22} alt='img' /></div>
                  <div className={styles.item}><Image src={com23} alt='img' /></div>
                  <div className={styles.item}><Image src={com24} alt='img' /></div>
                  <div className={styles.item}><Image src={com25} alt='img' /></div>
                  <div className={styles.item}><Image src={com26} alt='img' /></div>
                  <div className={styles.item}><Image src={com27} alt='img' /></div>
                  <div className={styles.item}><Image src={com28} alt='img' /></div>
                  <div className={styles.item}><Image src={com29} alt='img' /></div> */}
                </motion.div>
              )
            }
          </div>
        </Section.Row>
      </Container>
    </Section >
  )
}
