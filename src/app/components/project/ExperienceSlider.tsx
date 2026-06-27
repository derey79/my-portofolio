'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/app/constants/experiences';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ExperienceSlider() {
  return (
    <div className='experience-slider mb-16'>
      <Swiper
        className='pb-16 [&>.swiper-pagination-progressbar]:top-auto! [&>.swiper-pagination-progressbar]:bottom-0! [&>.swiper-pagination-progressbar]:h-1'
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        pagination={{
          type: 'progressbar',
        }}
        breakpoints={{
          // Ketika lebar layar >= 0px (Mobile default)
          0: {
            slidesPerView: 1.1,
          },
          // Ketika lebar layar >= 768px (Tablet / Desktop)
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {experiences.map((item) => (
          <SwiperSlide key={item.period}>
            <ExperienceCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-8 flex justify-center gap-4 md:justify-start'>
        <button className='swiper-prev border border-neutral-800 px-6 py-3 md:px-10 md:py-4'>
          Prev
        </button>

        <button className='swiper-next border border-neutral-800 px-6 py-3 md:px-10 md:py-4'>
          Next
        </button>
      </div>
    </div>
  );
}
