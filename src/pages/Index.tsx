
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Faculty from '@/components/Faculty';
import Achievements from '@/components/Achievements';
import Facilities from '@/components/Facilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <Achievements />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
