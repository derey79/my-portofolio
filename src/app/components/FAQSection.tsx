'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FAQ_DATA } from '@/app/constants/faq';
import FAQCard from './partials/FAQCard';
import TitleHeader from './commons/TitleHeader';
import { Button } from '@/components/ui/button';

import 'swiper/css';
import 'swiper/css/navigation';

const NAV_BUTTON_CLASSES =
  'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 disabled:opacity-30 transition-all font-medium text-sm md:text-md px-14 md:py-8 py-5';

export default function FAQSection() {
  const [activeId, setActiveId] = React.useState<string>('faq-2');

  return (
    <section className='custom-container mx-auto border-t border-neutral-900'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-12'>
        <div className='space-y-3'>
          <TitleHeader
            title={<>Still Got Questions?</>}
            description={
              "I've listed answers to questions I often get as a frontend developer."
            }
            align='left'
          />
        </div>
        <div className='flex gap-3'>
          <Button
            variant='outline'
            size='sm'
            className={`faq-prev ${NAV_BUTTON_CLASSES}`}
          >
            Prev
          </Button>
          <Button
            variant='outline'
            size='sm'
            className={`faq-next ${NAV_BUTTON_CLASSES}`}
          >
            Next
          </Button>
        </div>
      </div>

      {/* SWIPER SLIDER UNTUK LAYOUT KARTU */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        navigation={{
          prevEl: '.faq-prev',
          nextEl: '.faq-next',
        }}
        breakpoints={{
          0: { slidesPerView: 1.1 }, // Mobile mengintip sedikit agar tahu bisa di-swipe
          640: { slidesPerView: 2.2 }, // Tablet
          1024: { slidesPerView: 3.5 }, // Desktop seperti gambar
        }}
        // slidesPerView='auto'
        className='w-full'
      >
        {FAQ_DATA.map((faq) => {
          // const isActive = activeId === faq.id;

          return (
            <SwiperSlide key={faq.id} className='h-auto'>
              <FAQCard
                faq={faq}
                isActive={activeId === faq.id}
                onClick={() => setActiveId(faq.id)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
