import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');

      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const targetId = href.replace('#', '');
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Account for header height
              behavior: 'smooth'
            });

            // Update URL without page reload
            history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App