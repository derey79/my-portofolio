'use client';

import React from 'react';
import TitleHeader from './commons/TitleHeader';
// import { motion } from 'framer-motion';
import TestimonialCard from './partials/TestimonialCard';
import { TESTIMONIALS_DATA } from '../constants/testimonials';

export default function Testimonials() {
  // const titleVariants = {
  //   hidden: {
  //     opacity: 0,
  //     scaleX: 0.5,
  //     letterSpacing: '-0.03em',
  //     filter: 'blur(4px)',
  //   },
  //   visible: {
  //     opacity: 1,
  //     scaleX: 1,
  //     letterSpacing: '0.02em',
  //     filter: 'blur(0px)',
  //     transition: {
  //       duration: 1,
  //       ease: [0.25, 1, 0.5, 1] as const, // Tambahkan "as const" di sini
  //     },
  //   },
  // };

  const featuredCard = TESTIMONIALS_DATA.find(
    (item) => item.variant === 'featured'
  );
  const standardCard = TESTIMONIALS_DATA.find(
    (item) => item.variant === 'standard'
  );
  const simpleCards = TESTIMONIALS_DATA.filter(
    (item) => item.variant === 'simple'
  );

  return (
    <section id='faq' className='py-20'>
      <div className='custom-container mx-auto px-4'>
        <TitleHeader
          title={<>Trusted Voices</>}
          description='Here’s what people say about working with me — across projects, teams, and timelines.'
        />

        {/* Content Skills */}
      </div>

      <div className='custom-container mx-auto space-y-16'>
        {/* HEADER SECTION DENGAN ANIMASI STRETCH */}
        <div className='text-center space-y-4'>
          {/* <motion.h2
            variants={titleVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='origin-center text-4xl md:text-5xl font-extrabold tracking-wide text-neutral-100'
          >
            Trusted Voices
          </motion.h2>
          <p className='text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed'>
            Here&apos;s what people say about working with me — across projects,
            teams, and timelines.
          </p> */}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
          {/* Kolom Kiri: Kartu Utama (8X) */}
          {featuredCard && <TestimonialCard {...featuredCard} />}

          {/* Kolom Kanan: Kartu Atas (3X) & Dua Kartu Sederhana */}
          <div className='lg:col-span-2 flex flex-col gap-6'>
            {/* Kartu Atas (3X) */}
            {standardCard && <TestimonialCard {...standardCard} />}

            {/* Sub-grid Otomatis Menggunakan .map() untuk Dua Kartu Kecil di Bawah */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 grow'>
              {simpleCards.map((card) => (
                <TestimonialCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
