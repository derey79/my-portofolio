'use client';

import ProjectCard from './ProjectCard';
import { Project } from '@/types/types';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className='mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 px-4'>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          year={project.year}
          image={project.image}
          href={`/projects/${project.slug}`}
        />
      ))}
    </div>
  );
}
