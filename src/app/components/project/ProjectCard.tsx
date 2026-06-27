'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  year: string;
  image: string;
  href?: string;
}

export default function ProjectCard({
  title,
  year,
  image,
  href = '#',
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className='group'
    >
      <Link href={href}>
        <div className='max-w-93.25 overflow-hidden rounded-xl'>
          <Image
            src={image}
            alt={title}
            width={373}
            height={373}
            className='aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-2xl font-semibold text-white'>{title}</h3>

          <p className='mt-2 text-base text-neutral-400'>{year}</p>
        </div>
      </Link>
    </motion.div>
  );
}
