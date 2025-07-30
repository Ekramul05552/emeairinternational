import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import TourPackages from './components/TourPackages';
import UploadDocuments from './components/UploadDocuments';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero onBookNow={() => scrollToSection('contact')} />
        </section>
        
        <section id="services" className="py-16 bg-gray-50">
          <Services />
        </section>
        
        <section id="about" className="py-16">
          <About />
        </section>
        
        <section id="tour-packages" className="py-16 bg-gray-50">
          <TourPackages />
        </section>
        
        <section id="upload" className="py-16">
          <UploadDocuments />
        </section>
        
        <section id="testimonials" className="py-16 bg-gray-50">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      
      <Footer onNavigate={scrollToSection} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;