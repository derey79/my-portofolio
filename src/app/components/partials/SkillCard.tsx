'use client';
import React from 'react';
// import { useState } from 'react';
import Image from 'next/image';
// import { SkillItem } from '@/app/constants/skills';
// import { Skill } from '@/types/types';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  name: string;
  iconPath: string;
  percentage: number;
}

export default function SkillCard({
  name,
  iconPath,
  percentage,
}: SkillCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isCounting, setIsCounting] = React.useState(false);

  return (
    <div
      ref={ref}
      className='flex items-center justify-between w-full py-5 border-b border-neutral-800/60 text-white transition-all duration-200 hover:bg-white/1 px-2 group'
    >
      <div className='flex items-center gap-4'>
        <div className='relative flex items-center justify-center overflow-hidden rounded-md w-15 h-15 bg-neutral-900/30'>
          <Image
            src={iconPath}
            alt={`${name} logo`}
            width={60}
            height={60}
            className='object-contain transition-transform duration-300 group-hover:scale-105'
          />
        </div>

        <span className='text-base font-medium tracking-wide text-neutral-200 transition-colors group-hover:text-white'>
          {name}
        </span>
      </div>

      <span
        className={`font-mono text-base font-bold tracking-wider transition-colors duration-300 ${
          isCounting
            ? 'text-red-500' // Warna merah saat angka sedang berjalan
            : 'text-neutral-100 group-hover:text-[#1ba4ca]' // Warna putih standar & efek hover setelah selesai
        }`}
      >
        {inView ? (
          <CountUp
            start={0}
            end={percentage}
            duration={3}
            suffix='%'
            onStart={() => setIsCounting(true)}
            onEnd={() => setIsCounting(false)}
          />
        ) : (
          '0%'
        )}
        {/* <CountUp end={percentage} duration={2} suffix='%' /> */}
      </span>
    </div>
  );
}
