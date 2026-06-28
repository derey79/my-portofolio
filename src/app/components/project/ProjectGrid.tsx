'use client';

import { motion } from 'framer-motion'; // IMPOR BARU
import ProjectCard from './ProjectCard';
import { Project } from '@/types/types';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  // 1. Mengatur urutan antrean masuk antar kartu proyek (Cascading / Stagger)
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Jeda 0.12 detik antar kartu agar mengalir natural
        delayChildren: 0.1, // Jeda awal sebelum kartu pertama mulai meluncur
      },
    },
  };

  // 2. Efek memudar naik sinematik untuk masing-masing kartu proyek
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Memulai posisi 40 piksel lebih bawah dari aslinya
      filter: 'blur(4px)', // Sentuhan buram optik transisi yang halus
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const, // Easing meluncur senada dengan judul XNRGY
      },
    },
  };

  return (
    // 3. Mengubah div pembungkus grid utama menjadi motion.div sebagai detektor scroll layar
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-80px' }} // Aktif sesaat sebelum elemen masuk penuh ke layar
      variants={gridVariants}
      className='mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 px-4'
    >
      {projects.map((project) => (
        // 4. Membungkus setiap ProjectCard dengan motion.div agar terikat stagger induk
        <motion.div
          key={project.slug}
          variants={cardVariants}
          whileHover={{
            y: -8, // Mikro-interaksi melayang naik tipis saat diarahkan kursor
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          className='h-full'
        >
          <ProjectCard
            title={project.title}
            year={project.year}
            image={project.image}
            href={`/projects/${project.slug}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
