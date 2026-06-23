import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  description: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className='section-title'>{title}</h2>

      <p className='section-description'>{description}</p>
    </div>
  );
}
