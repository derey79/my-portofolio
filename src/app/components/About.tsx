'use client';

import Image from 'next/image';
import FeatureGrid from '@/app/components/partials/FeatureGrid';
import { SOCIAL_LINKS } from '@/app/constants/socials';
import { FEATURES } from '@/app/constants/features';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger elements sequentially for a polished look
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.5, 1] as const, // ✨ Add 'as const' right here
      },
    },
  };

  return (
    <section id='about' className='w-full py-24 border-b border-neutral-900'>
      <motion.div
        className='custom-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 px-4'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }} // Triggers animation once when 100px into view
      >
        {/* <div className='custom-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 px-6'> */}
        {/* <div className='lg:col-span-8 max-w-190'> */}
        <motion.div className='lg:col-span-8 max-w-190' variants={itemVariants}>
          <h2 className='text-display-md md:text-[40px] font-bold tracking-tighter text-neutral-100 mb-2'>
            I turn ideas and designs into functional, accessible, and performant
            websites{' '}
            <span className='text-primary-300'>
              using modern frontend technologies.
            </span>
          </h2>
        </motion.div>

        {/* <div className='lg:col-span-4 flex flex-col items-start lg:items-end lg:justify-self-end w-52 h-47'> */}
        <motion.div
          className='lg:col-span-4 flex flex-col items-start lg:items-end  w-52 h-47'
          variants={itemVariants}
        >
          <span className='text-md md:text-lg text-neutral-400 tracking-wide'>
            About Me
          </span>

          <div
            className='flex items-center gap-3 mt-4 md:mt-40'
            // style={{ marginTop: 'md:116px' }}
          >
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-200'
                aria-label={social.label}
              >
                <Image
                  src={social.iconPath}
                  alt={`${social.label} icon`}
                  width={16}
                  height={16}
                  className='object-contain opacity-60 hover:opacity-100 transition-opacity duration-200'
                />
              </a>
            ))}
          </div>
        </motion.div>

        <div className='lg:col-span-12 w-full pt-4 pb-8'>
          <div className='w-full h-0 border-b border-neutral-800/60' />
        </div>

        <div className='lg:col-span-5 relative w-full max-w-113.25 h-128.25 rounded-lg overflow-hidden grayscale-30 hover:grayscale-0 transition-all duration-300'>
          <Image
            src='/about-image.png'
            alt='Reymond Portrait Layout'
            fill
            priority
            className='object-cover'
          />
        </div>

        <div className='lg:col-span-7 gap-10 pt-8'>
          <FeatureGrid features={FEATURES} />
        </div>
      </motion.div>
    </section>
  );
}
