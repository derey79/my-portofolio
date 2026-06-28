// import Image from 'next/image';
// import { Navbar } from './components/navbar';
import Hero from './components/Hero';
import AboutPage from './(pages)/about/page';
import SkillsPage from './(pages)/skills/page';
import ProjectsPage from './(pages)/projects/page';
import TestimonialPage from './(pages)/faq/page';
// import ContactPage from './(pages)/contact/page';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <TestimonialPage />
      {/* <ContactPage /> */}
    </div>
  );
}
