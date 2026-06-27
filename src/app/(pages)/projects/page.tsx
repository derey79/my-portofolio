'use client';

import Project from '@/app/components/Projects';
import ProjectJourney from '@/app/components/Journey';

export default function ProjectsPage() {
  return (
    <div className='py-12'>
      <Project />
      <ProjectJourney />
    </div>
  );
}
