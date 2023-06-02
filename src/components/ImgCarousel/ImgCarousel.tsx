'use client'

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Section } from '@/section';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

import { ImgAnimated, ImgGroup } from '@/ui';
import Image, { StaticImageData } from 'next/image';

type Props = {
  imgs: Array<StaticImageData>
}

export default function ImgCarousel({ imgs }: Props) {

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

  const slides = imgs.map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      {
        swiper
          ? (
            <Section.Column variant='image'>
              <ImgGroup>
                {React.Children.toArray(imgs.map(img => <ImgAnimated image={img} imageLabel='image' />))}
              </ImgGroup>
            </Section.Column>
          )
          : (

            <Swiper
              style={{ height: '300px', width: '100%', borderRadius: '10px', boxShadow: '0 0 5px white' }}
              modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              virtual
            >
              {imgs.map((img, index) => <React.Fragment key={index}><SwiperSlide><Image src={img} alt='img' /></SwiperSlide></React.Fragment>)}
            </Swiper>
          )
      }

    </>
  )
}
