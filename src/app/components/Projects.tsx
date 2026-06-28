'use client';

import TitleHeader from './commons/TitleHeader';
import ProjectsGrid from './project/ProjectGrid';
import { PROJECTS } from '../constants/projectlist';
import { motion } from 'framer-motion';

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const titleWords = ['Bridging', 'Design', 'and', 'Development'];

  return (
    <section id='projects' className='pt-16'>
      <div className='custom-container mx-auto px-4'>
        <TitleHeader
          title={
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-120px' }}
              variants={containerVariants}
              className='inline-flex flex-wrap gap-x-[0.25em] gap-y-1 justify-center w-full'
            >
              {titleWords.map((word, index) => (
                // Span ini bertindak sebagai topeng (mask) pelindung potong teks luar
                <span
                  key={index}
                  className='relative inline-block overflow-hidden py-1'
                >
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${word === 'Development' ? 'text-primary-300 font-extrabold' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.div>
          }
          /* 4. MEMBUNGKUS DESKRIPSI DENGAN ANIMASI FADE-IN ELEGAN MENGANTRE DI AKHIR */
          description={
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5, // Memberikan jeda waktu agar judul selesai meluncur naik dahulu
                ease: 'easeOut',
              }}
              className='section-description text-center'
            >
              These are real projects where I implemented frontend interfaces
              with precision and attention to detail.
            </motion.p>
          }
        />
        <div className='relative h-auto pt-20'>
          {/* Content Skills */}
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}
