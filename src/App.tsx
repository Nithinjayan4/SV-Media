import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observerRef.current?.observe(el));
    }, 100);

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
