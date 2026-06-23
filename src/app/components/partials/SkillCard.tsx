import Image from 'next/image';
// import { SkillItem } from '@/app/constants/skills';
// import { Skill } from '@/types/types';

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
  return (
    <div className='flex items-center justify-between w-full py-5 border-b border-neutral-800/60 text-white transition-all duration-200 hover:bg-white/1 px-2 group'>
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

      <span className='font-mono text-base font-bold tracking-wider text-neutral-100 transition-colors group-hover:text-[#1ba4ca]'>
        {percentage}%
      </span>
    </div>
  );
}
