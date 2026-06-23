'use client';

import { useState, useEffect } from 'react';
import { navigationData } from '../constants/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-137.5 px-4'>
      {/* <div className='flex items-center gap-1 p-2 rounded-full border border-white/5 bg-neutral-900/80 backdrop-blur-md shadow-2xl'> */}
      <div
        className={`flex items-center gap-1 p-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-2xl shadow-black/40' // Scrolled active style state
            : 'border-white/5 bg-neutral-900/40 backdrop-blur-md' // Resting flat initial style state
        }`}
      >
        <Link
          href='/'
          className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
            pathname === '/' && !isScrolled
              ? 'bg-white/10 text-white'
              : pathname === '/' && isScrolled
                ? 'bg-white/10 text-white font-extrabold shadow-sm'
                : 'text-neutral-400 hover:text-white'
          }`}
        >
          Reymond
        </Link>

        {/* Dynamic Navigation Links */}
        <div className='hidden md:flex items-center justify-between flex-1 pl-2 pr-4'>
          {navigationData.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 py-2 px-3 rounded-full ${
                  isActive
                    ? 'bg-transparent text-primary-300 font-semibold' // High-contrast active view
                    : 'text-neutral-400 hover:text-white hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>

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
