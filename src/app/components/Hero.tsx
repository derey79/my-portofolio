// import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react'; // npm i lucide-react if you want icons easily

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative w-full max-w-360 min-h-189 mx-auto overflow-hidden bg-[#050b0d] text-white pt-56.75 pb-16'
      aria-label='hero-heading'
    >
      <div
        className='absolute pointer-events-none z-0 opacity-80'
        style={{
          width: '1845px',
          height: '1230px',
          top: '-501px',
          left: '-1047px',
          opacity: 0.8,
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)',
        }}
      />

      <div
        className='absolute pointer-events-none mix-blend-normal z-1 opacity-80'
        style={{
          width: '1089.02px',
          height: '503px',
          left: '-303.58px',
          top: '-64px',
          backgroundImage: "url('/grid-hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className='flex-[5.6] basis-80'>
        {/* <div className='relative z-10 w-full max-w-360 mx-auto flex items-start justify-between'> */}
        <div className='w-full max-w-171 min-h-119 ml-4 md:ml-35 flex flex-col items-start text-left z-10'>
          <span className='text-sm tracking-wider text-neutral-400 font-medium mb-4'>
            Hi, I&apos;m rey
          </span>

          <h1 className='text-5xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.95] mb-6'>
            Front
            <span className='font-serif italic font-light tracking-wide'>
              End
            </span>
            <br />
            Developer
          </h1>

          <p className='text-sm md:text-[15px] text-neutral-400 font-light leading-relaxed mb-4 max-w-130'>
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>

          {/* Action button engagement interface entry */}
          {/* Action Call to Button */}
          <Link
            href='#contact'
            className='flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-sm text-white bg-cyan-600 hover:bg-cyan-500 active:scale-[0.98] transition-all'
          >
            <Mail className='w-4 h-4' />
            Hire Me
          </Link>
        </div>

        {/* <div className='flex-[4.4] basis-80 relative border-2'> */}
        {/* <div
          className='flex-[4.4] relative border-2'
          style={{ height: 'clamp(21.19rem, 52.73vw, 39.81rem);' }}
        >
          <Image
            src='/image-card-holder.png'
            alt='Edwin Badge Portrait Layout'
            fill
            priority
            className='object-contain'
          />
        </div> */}
      </div>

      {/* <div></div> */}
      {/* </div> */}
    </section>
  );
}
