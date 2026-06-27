// 'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Adjust path to your Shadcn setup
import { MOCK_TOOLS } from '../constants/skills';
import SkillCard from './partials/SkillCard';
import TitleHeader from './commons/TitleHeader';
import { advantages } from '@/app/constants/comparison';
import ComparisonTable from './partials/ComparisonCard';

export default function TechStackSection() {
  return (
    <section id='skills' className='w-full py-24 border-b border-neutral-900'>
      <div className='custom-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-32 items-start'>
        <div className='lg:col-span-4 mx-auto p-2 flex flex-col justify-between items-start text-white w-full max-w-112.5 h-125 md:max-w-91.75 transition-all duration-300'>
          <div className='flex flex-col w-full'>
            <h2 className='section-title pb-4'>
              Tools I Use to <br /> Build
            </h2>

            <p className='section-description'>
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </p>
          </div>

          <Button className='w-full h-auto py-4 px-6 font-semibold text-sm rounded-none text-white bg-primary-300 hover:bg-primary-400 active:scale-[0.99] transition-all tracking-wide cursor-pointer flex items-center justify-center gap-2'>
            <Mail className='w-4 h-4' strokeWidth={2} />
            Send Message
          </Button>
        </div>

        <div className='lg:col-span-6 relative w-full md:pl-8 '>
          <div
            className='flex flex-col w-full max-h-125 overflow-y-auto pl-4 scroll-smooth
                       [&::-webkit-scrollbar]:w-1.5
                       [&::-webkit-scrollbar-track]:bg-neutral-950/20
                       [&::-webkit-scrollbar-thumb]:bg-neutral-800
                       [&::-webkit-scrollbar-thumb]:rounded-full
                       hover:[&::-webkit-scrollbar-thumb]:bg-[#1ba4ca]/40'
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

      <div className='relative overflow-hidden py-24'>
        <div className='absolute inset-0 bg-grid opacity-20' />
        <div className='absolute bottom-0 left-0 h-125 w-125 rounded-full bg-cyan-500/20 blur-[120px]' />

        <div className='relative z-10 custom-container'>
          <TitleHeader
            title={
              <>
                Not Your Typical{' '}
                <span className='text-primary'>Frontend Developer</span>
              </>
            }
            description='I care about how it looks, how it works, and how it feels — all at once.'
          />

          <div
            className='absolute pointer-events-none mix-blend-normal z-1 opacity-80'
            style={{
              width: '1089.02px',
              height: '503px',
              left: '-581px',
              top: '219px',
              backgroundImage: "url('/grid-hero-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <ComparisonTable items={advantages} />
        </div>
      </div>
    </section>
  );
}
