'use client';

import StatusIcon from './ComparisonStatusIcon';
import { motion } from 'framer-motion';
import { ComparisonTableProps } from '@/types/types';

export default function ComparisonTable({ items }: ComparisonTableProps) {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.08,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  const tableContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Jeda 0.08 detik antar baris agar memudar mengalir halus
        delayChildren: 0.1, // Jeda awal sebelum baris pertama mulai meluncur
      },
    },
  };

  const rowVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Memulai posisi 20 piksel lebih bawah dari aslinya
      filter: 'blur(3px)', // Efek buram optik tipis saat masuk
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const, // Kurva meluncur mulus
      },
    },
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={tableContainerVariants}
      className='w-full overflow-hidden border border-neutral-800 rounded-xl bg-neutral-950/20 backdrop-blur-sm mt-12'
    >
      <table className='w-full table-fixed'>
        <thead>
          <tr className='border-b border-neutral-800'>
            <th className='thead-title'>Skill</th>
            <th className='thead-title bg-primary-400'>With Me</th>
            <th className='thead-title'>Other</th>
          </tr>
        </thead>

        <tbody className='divide-y divide-neutral-900'>
          {items.map((item) => (
            <motion.tr
              key={item.skill}
              variants={rowVariants}
              className='border-b border-neutral-800 hover:bg-white/2 transition-colors duration-200 group'
            >
              {/* Kolom Teks Skill dengan Efek Hover Scale */}
              <td className='text-sm md:text-lg px-6 py-5 overflow-hidden'>
                <motion.div
                  whileHover={{ scale: 1.03, x: 4, color: '#1ba4ca' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className='origin-left cursor-default select-none font-medium text-neutral-200'
                >
                  {item.skill}
                </motion.div>
              </td>

              {/* Kolom Status "With Me" (Memiliki Background Warna Utama) */}
              <td className='px-6 py-5 bg-primary-400/90 text-left'>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className='inline-block origin-center'
                >
                  <StatusIcon active={item.withMe} />
                </motion.div>
              </td>

              {/* Kolom Status "Other" */}
              <td className='px-6 py-5 text-left'>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className='inline-block origin-center'
                >
                  <StatusIcon active={item.other} />
                </motion.div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
