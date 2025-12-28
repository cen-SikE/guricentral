
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Doctors from './components/Doctors.tsx';
import Emergency from './components/Emergency.tsx';
import AppPromo from './components/AppPromo.tsx';
import Testimonials from './components/Testimonials.tsx';
import Blog from './components/Blog.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="doctors">
          <Doctors />
        </section>
        <section id="emergency">
          <Emergency />
        </section>
        <AppPromo />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
