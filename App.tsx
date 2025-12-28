
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Doctors from './components/Doctors';
import Emergency from './components/Emergency';
import AppPromo from './components/AppPromo';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

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
