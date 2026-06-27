'use client';

import TitleHeader from './commons/TitleHeader';
import ExperienceSlider from './project/ExperienceSlider';

export default function ProjectJourney() {
  return (
    <section className='py-20'>
      <div className='custom-container mx-auto px-4'>
        <TitleHeader
          title={<>My Journey in Tech</>}
          description='From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.'
          align='left'
        />

        <div className='flex flex-col gap-2.5 h-auto pt-24'>
          {/* Content Skills */}
          <ExperienceSlider />
        </div>
      </div>
    </section>
  );
}
