// import Image from 'next/image';
// import { Navbar } from './components/navbar';
import Hero from './components/Hero';
import AboutPage from './(pages)/about/page';
import SkillsPage from './(pages)/skills/page';
import ProjectsPage from './(pages)/projects/page';
import TestimonialPage from './(pages)/faq/page';
import ContactPage from './(pages)/contact/page';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <TestimonialPage />
      <ContactPage />
    </div>
    // <div className='flex min-h-screen items-center justify-center bg-slate-900'>
    //   <h1 className='text-4xl font-bold text-amber-50'>
    //     Tailwind CSS v4 works in Next.js!
    //   </h1>
    // </div>
  );
}
