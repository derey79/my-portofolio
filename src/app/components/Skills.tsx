'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_TOOLS } from '../constants/skills';
import SkillCard from './partials/SkillCard';
import TitleHeader from './commons/TitleHeader';
import { advantages } from '@/app/constants/comparison';
import ComparisonTable from './partials/ComparisonCard';
import { motion } from 'framer-motion';

export default function TechStackSection() {
  const headerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.4,
      filter: 'blur(6px)',
      y: 60,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const, // Kembalikan tinggi h2 dengan cepat
      },
    },
  };

  // 2. Animasi Deskripsi P (Efek tersedot/tertarik ke atas menggunakan elastisitas spring)
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 120,
      scaleY: 0.6,
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        type: 'spring' as const, // FIX: Lock type to a constant literal
        stiffness: 70,
        damping: 14,
        restDelta: 0.001,
      },
    },
  };

  return (
    <section id='skills' className='w-full pt-18 border-b border-neutral-900'>
      <div className='custom-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-32 items-start'>
        <div className='lg:col-span-4 mx-auto p-2 flex flex-col justify-between items-start text-white w-full max-w-112.5 h-125 md:max-w-91.75 transition-all duration-300'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1, // h2 jalan duluan, 0.1 detik kemudian p langsung ditarik naik
                },
              },
            }}
            className='flex flex-col w-full'
          >
            {/* Judul H2 - Jangkar di bawah agar meregang ke atas */}
            <motion.h2
              variants={headerVariants}
              className='section-title pb-4 origin-bottom'
            >
              Tools I Use to <br /> Build
            </motion.h2>

            {/* Deskripsi P - Menggunakan efek tarikan magnetis (spring) */}
            <motion.p
              variants={paragraphVariants}
              className='section-description origin-top mt-2' // origin-top membuat p terasa tertarik dari atasnya
            >
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </motion.p>
          </motion.div>

          <Button className='w-full h-auto py-4 px-6 font-semibold text-sm rounded-none text-white bg-primary-300 hover:bg-primary-400 active:scale-[0.99] transition-all tracking-wide cursor-pointer flex items-center justify-center gap-2'>
            <Mail className='w-4 h-4' strokeWidth={2} />
            Send Message
          </Button>
        </div>

        <div className='lg:col-span-6 relative w-full md:pl-8 '>
          <div
            className='flex flex-col w-full max-h-125 overflow-y-auto pl-4 scroll-smooth [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-neutral-950/20 [&::-webkit-scrollbar-thumb]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#1ba4ca]/40'
            style={{ direction: 'rtl' }}
          >
            <div className='flex flex-col w-full' style={{ direction: 'ltr' }}>
              {MOCK_TOOLS.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  iconPath={skill.iconPath}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='relative overflow-hidden pt-28'>
        <div className='absolute inset-0 bg-grid opacity-20' />
        <div className='absolute bottom-0 left-0 h-125 w-125 rounded-full bg-primary-400 blur-[120px]' />

        <div className='relative z-10 custom-container'>
          <TitleHeader
            title={
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className='inline-flex flex-wrap gap-x-[0.25em]'
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 30, scaleY: 0.5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                      },
                    },
                  }}
                  className='origin-bottom block'
                >
                  Not
                </motion.span>

                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 30, scaleY: 0.5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                      },
                    },
                  }}
                  className='origin-bottom block'
                >
                  Your
                </motion.span>

                {/* Kata 3: "Typical" */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 30, scaleY: 0.5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                      },
                    },
                  }}
                  className='origin-bottom block'
                >
                  Typical
                </motion.span>

                {/* Kata 4 & 5: "Frontend Developer" dengan warna khusus primary */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 30, scaleY: 0.5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                      },
                    },
                  }}
                  className='text-primary origin-bottom block'
                >
                  Frontend
                </motion.span>

                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 30, scaleY: 0.5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                      },
                    },
                  }}
                  className='text-primary origin-bottom block'
                >
                  Developer
                </motion.span>
              </motion.div>
            }
            description={
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6, // Memberikan jeda agar judul selesai bergulir naik terlebih dahulu
                  ease: 'easeOut',
                }}
                className='section-description' // Pastikan kelas bawaan dari komponen TitleHeader Anda tetap terpasang jika dibutuhkan
              >
                I care about how it looks, how it works, and how it feels — all
                at once.
              </motion.p>
            }
          />

          <div
            className='absolute pointer-events-none mix-blend-normal z-1 opacity-80'
            style={{
              width: '1089.02px',
              height: '503px',
              left: '-581px',
              top: '300px',
              backgroundImage: "url('/grid-hero-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className='pt-4 pb-12'>
            <ComparisonTable items={advantages} />
          </div>
        </div>
      </div>
    </section>
  );
}
