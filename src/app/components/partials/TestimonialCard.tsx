'use client';

import Image from 'next/image';

// Tipe data TypeScript untuk properti kartu
interface TestimonialCardProps {
  stat?: string;
  title?: string;
  text: string;
  author: string;
  role: string;
  avatarUrl?: string;
  variant?: 'featured' | 'standard' | 'simple';
}

export default function TestimonialCard({
  stat,
  title,
  text,
  author,
  role,
  avatarUrl = '/icons/pablo-1.png',
  variant = 'simple',
}: TestimonialCardProps) {
  // Menentukan kelas CSS dinamis berdasarkan varian kartu
  const cardStyles = {
    // Kartu Kiri (8X) - Gradien Teal mendominasi
    featured:
      'bg-gradient-to-br from-[#149bb0]/15 via-[#149bb0]/0 to-transparent min-h-[500px] lg:h-[751px]',
    // Kartu Kanan Atas (3X) - Horizontal & Gelap
    standard: 'bg-neutral-900/40 min-h-[350px] lg:h-[363px]',
    // Dua Kartu Kecil Bawah - Sederhana & Fleksibel
    simple: 'bg-neutral-900/40 min-h-[300px]',
  };

  return (
    <div
      className={`flex flex-col justify-between p-8 rounded-xl border border-neutral-800 ${cardStyles[variant]}`}
    >
      <div className='space-y-4'>
        {stat && (
          <span className='text-4xl lg:text-5xl font-black text-neutral-100 font-mono tracking-tighter block'>
            {stat}
          </span>
        )}
        {title && (
          <h3 className='text-lg lg:text-xl font-bold leading-snug text-neutral-100'>
            {title}
          </h3>
        )}

        <div className='flex text-amber-400 text-sm'>★★★★★</div>
        <p className='text-neutral-400 text-sm leading-relaxed'>{text}</p>
      </div>

      {/* Bagian Profil Pembicara (Bawah) */}
      <div className='flex items-center justify-between pt-4 mt-6 border-t border-neutral-900'>
        <div className='flex items-center gap-3'>
          <div className='relative w-10 h-10 rounded-full bg-neutral-800 overflow-hidden'>
            <Image src={avatarUrl} alt={author} fill className='object-cover' />
          </div>
          <div>
            <h4 className='text-sm font-bold text-neutral-200'>{author}</h4>
            <p className='text-xs text-neutral-500'>{role}</p>
          </div>
        </div>
        <span className='text-neutral-800 font-serif text-5xl font-bold leading-none select-none'>
          ”
        </span>
      </div>
    </div>
  );
}
