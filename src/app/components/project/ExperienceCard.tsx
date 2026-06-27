import Image from 'next/image';
// import { Briefcase } from 'lucide-react';
// import { Image } from 'next/image';

interface ExperienceCardProps {
  title: string;
  period: string;
  description: string;
  companyLogo: string;
}

export default function ExperienceCard({
  title,
  period,
  description,
  companyLogo,
}: ExperienceCardProps) {
  return (
    <div className='w-auto h-full border border-neutral-800 bg-black p-8'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-md md:text-xl font-bold'>{title}</h3>

          <p className='mt-2 text-sm md:text-md text-neutral-25'>{period}</p>
        </div>

        {/* <Briefcase /> */}
        <Image
          src={'/icons/briefcase.png'}
          alt='Company'
          width={24}
          height={24}
        />
      </div>

      <div className='my-8 h-px bg-neutral-800' />

      <p className='text-sm md:text-md leading-8 text-neutral-400'>
        {description}
      </p>

      <div className='mt-12'>
        <Image src={companyLogo} alt='Company' width={160} height={60} />
      </div>
    </div>
  );
}
