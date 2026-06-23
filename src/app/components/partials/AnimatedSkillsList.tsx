'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rowItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface Skill {
  name: string;
  percentage: number;
  iconPath: string;
}

export default function AnimatedSkillsList({ data }: { data: Skill[] }) {
  return (
    <motion.div
      className='flex flex-col w-full'
      style={{ direction: 'ltr' }}
      variants={listContainerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-50px' }}
    >
      {data.map((skill, index) => (
        <motion.div
          key={index}
          variants={rowItemVariants}
          className='flex items-center justify-between w-full py-5 border-b border-neutral-800/60 text-white transition-all duration-200 hover:bg-white/1 px-2 group shrink-0'
        >
          <div className='flex items-center gap-4'>
            <div className='relative w-15 h-15 flex items-center justify-center rounded-xl bg-neutral-900/30 overflow-hidden shrink-0'>
              <Image
                src={skill.iconPath}
                alt={`${skill.name} tool logo`}
                width={60}
                height={60}
                className='object-contain transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <span className='text-base font-medium text-neutral-200 tracking-wide group-hover:text-white transition-colors'>
              {skill.name}
            </span>
          </div>

          <div className='flex items-center'>
            <span className='text-base font-bold tracking-wider text-neutral-100 font-mono group-hover:text-[#1ba4ca] transition-colors'>
              {skill.percentage}%
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
