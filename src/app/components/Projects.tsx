'use client';

import TitleHeader from './commons/TitleHeader';
import ProjectsGrid from './project/ProjectGrid';
import { PROJECTS } from '../constants/projectlist';

export default function Project() {
  return (
    <section id='projects' className='py-20'>
      <div className='custom-container mx-auto px-4'>
        <TitleHeader
          title={
            <>
              Bridging Design and{' '}
              <span className='text-primary-300'>Development</span>
            </>
          }
          description='These are real projects where I implemented frontend interfaces with precision and attention to detail.'
        />
        <div className='relative h-auto'>
          {/* Content Skills */}
          <ProjectsGrid projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}
