'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import HowIWork from '@/components/HowIWork/HowIWork';
import CaseStudies from '@/components/CaseStudies/CaseStudies';
import Skills from '@/components/Skills/Skills';
import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  useSmoothScroll();

  return (
    <main>
      <Navigation />
      <Hero />
      <HowIWork />
      <CaseStudies />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}