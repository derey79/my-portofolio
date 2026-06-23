'use client';

import Image from 'next/image';

interface FeatureItem {
  iconPath: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

// 2. Individual Card Component (Reusable anywhere)
export function FeatureCard({ iconPath, title, description }: FeatureItem) {
  return (
    <div className='flex flex-col items-start text-left group backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 mb-2 pb-2'>
      {/* Feature Icon Container */}
      <div className='mb-4 '>
        <Image
          src={iconPath}
          alt=''
          width={24}
          height={24}
          className='object-contain transition-transform duration-200 group-hover:scale-125'
        />
      </div>

      {/* Feature Heading */}
      <h3 className='text-lg md:text-xl font-bold text-white mb-2 tracking-wide'>
        {title}
      </h3>

      {/* Detail Paragraph Block */}
      <p className='text-sm md:text-lg leading-relaxed text-neutral-400 font-light'>
        {description}
      </p>

      {/* <div className='w-full pt-2 pb-2'>
        <div className='w-full h-0 border-b border-neutral-800/60' />
      </div> */}
    </div>
  );
}

// 3. Grid Wrapper Component (Reusable layout structure)
export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:pl-4'>
      {features.map((feature, idx) => (
        <FeatureCard
          key={idx}
          iconPath={feature.iconPath}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
