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
import { motion } from 'framer-motion';

type Props = {
  imgs: Array<string>
}

export default function ImgCarousel({ imgs }: Props) {

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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, transition: { duration: .3 } }}
              viewport={{ amount: 0.1, once: true }}
              style={{ width: '100%' }}
            >
              <Swiper
                style={{ height: '300px', width: '100%', borderRadius: '10px' }}
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                virtual
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
              >
                {imgs.map((img, index) => <React.Fragment key={index}><SwiperSlide>
                  <div className='relative max-md:h-[270px] h-[300px]'>
                    <Image src={img} alt='img' fill />
                  </div>
                </SwiperSlide></React.Fragment>)}
              </Swiper>
            </motion.div>
          )
      }

    </>
  )
}
