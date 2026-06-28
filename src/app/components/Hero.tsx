'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const marqueeItems = [
    'App Development',
    'Website Development',
    'Pixel Perfect',
    'React Expert',
    'UI/UX Implementation',
    'Frontend Engineering',
  ];

  return (
    <section
      id='hero'
      className='relative w-full max-w-360 min-h-189 mx-auto overflow-hidden'
      aria-label='hero-heading'
    >
      <div
        className='absolute pointer-events-none z-0 opacity-80'
        style={{
          width: '1845px',
          height: '1230px',
          top: '-501px',
          left: '-1047px',
          opacity: 0.8,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)',
        }}
      />

      <div
        className='absolute pointer-events-none mix-blend-normal z-1 opacity-80'
        style={{
          width: '1089.02px',
          height: '503px',
          left: '-303.58px',
          top: '-64px',
          backgroundImage: "url('/grid-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className='relative w-full flex flex-col lg:block pt-16 lg:pt-56.75 pb-32'>
        <div className='order-first w-full flex justify-center items-center h-auto mb-10 lg:order-0 lg:absolute lg:w-85.25 lg:left-242 top-0 m-0 z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            className='relative w-85.25 h-167.75'
          >
            <Image
              src='/profile-image.png'
              alt='Edwin Anderson ID Badge'
              fill
              className='object-contain z-10 pointer-events-none'
              priority
            />
          </motion.div>
        </div>

        {/* 3. BLOK KOLOM TEKS HERO (Berada di bawah gambar pada tampilan mobile) */}
        <div className='w-full lg:max-w-200'>
          <div className='w-full max-w-171 min-h-119 ml-4 md:ml-35 flex flex-col items-start text-left z-10 gap-15.5'>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-neutral-400 font-medium tracking-wide text-sm md:text-base'
            >
              Hi, I&apos;m Edwin Anderson
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scaleY: 0.6 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className='text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] origin-top text-left uppercase'
            >
              Front
              <span className='italic font-serif font-normal text-neutral-300'>
                end
              </span>{' '}
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed text-left'
            >
              Passionate about frontend development, I focus on crafting digital
              products that are visually polished, performance-optimized, and
              deliver a consistent experience across all platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href='#contact'
                className='flex items-center gap-2 px-24 py-3 font-semibold text-sm text-white bg-primary-300 hover:bg-primary-400 active:scale-[0.98] transition-all'
              >
                <Mail className='w-4 h-4' />
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='w-full bg-primary-300 py-2 border-t border-b border-primary-400 overflow-hidden relative z-20 flex select-none'>
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          className='flex whitespace-nowrap gap-16 pr-16 items-center min-w-full'
        >
          {/* Loop Pertama */}
          {marqueeItems.map((item, index) => (
            <div
              key={`m1-${index}`}
              className='flex items-center gap-16 text-white text-base md:text-xl font-bold tracking-wide uppercase'
            >
              <span>{item}</span>
              <div className='relative w-15 h-15 shrink-0 animate-[spin_8s_linear_infinite]'>
                <Image
                  src='/frame-stars.png'
                  alt='Star Decorator'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          ))}

          {marqueeItems.map((item, index) => (
            <div
              key={`m2-${index}`}
              className='flex items-center gap-16 text-white text-base md:text-xl font-bold tracking-wide uppercase'
            >
              <span>{item}</span>
              <div className='relative w-15 h-15 shrink-0 animate-[spin_8s_linear_infinite]'>
                <Image
                  src='/frame-stars.png'
                  alt='Star Decorator'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
