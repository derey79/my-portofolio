'use client';

import { useState, useEffect } from 'react';
import { navigationData } from '../constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-137.5 px-4'>
        <div
          className={`flex items-center justify-between md:justify-start gap-1 p-2 rounded-full border transition-all duration-300 ${
            isScrolled || isOpen
              ? 'border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-2xl shadow-black/40'
              : 'border-white/5 bg-neutral-900/40 backdrop-blur-md'
          }`}
        >
          <Link
            href='/'
            onClick={() => setIsOpen(false)}
            className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-200 z-60 ${
              pathname === '/' && !isScrolled
                ? 'bg-white/10 text-white'
                : pathname === '/' && isScrolled
                  ? 'bg-white/10 text-white font-extrabold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
            }`}
          >
            Reymond
          </Link>

          <div className='hidden md:flex items-center justify-between flex-1 pl-2 pr-4'>
            {navigationData.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-full ${
                    isActive
                      ? 'bg-transparent text-primary-300 font-semibold'
                      : 'text-neutral-400 hover:text-white hover:scale-105'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle Menu'
            className='flex md:hidden relative w-10 h-10 rounded-full hover:bg-white/5 transition-all z-60 border-none'
          >
            {/* Ikon Hamburger (Muncul saat menu tertutup) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? 'opacity-0 scale-75 rotate-90'
                  : 'opacity-100 scale-100 rotate-0'
              }`}
            >
              <Image
                src='/icons/hamburger.png' // Sesuaikan lokasi folder aset Anda jika berbeda
                alt='Open Menu'
                width={20}
                height={20}
                className='object-contain inverted' // Tambahkan inverted jika gambar aslinya hitam agar menjadi putih
              />
            </div>

            {/* Ikon X-Close (Muncul saat menu terbuka) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-75 -rotate-90'
              }`}
            >
              <Image
                src='/icons/x-close.png' // Sesuaikan lokasi folder aset Anda jika berbeda
                alt='Close Menu'
                width={20}
                height={20}
                className='object-contain'
              />
            </div>
          </Button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-neutral-950/80 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className='flex flex-col items-center gap-6 w-full px-8'>
          {navigationData.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 py-3 px-6 rounded-full w-full text-center ${
                  isActive
                    ? 'bg-white/10 text-primary-300 font-bold scale-105'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
    // <header className='fixed top-8 z-50 w-full'>
    //   <div className=' bg-slate-700/20 max-w-132 md:mx-auto rounded-full'>
    //     <div className='flex-between w-full h-12 p-4'>
    //       <h1 className='font-extrabold'>Reymond</h1>

    //       <nav className='hidden lg:block '>
    //         <ul className='flex-start gap-2'>
    //           {navigationData.map((data) => (
    //             <li key={data.label}>
    //               <Link className='hover:text-primary-200 p-4' href={data.href}>
    //                 {data.label}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  );
};
