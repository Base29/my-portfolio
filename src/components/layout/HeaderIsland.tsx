import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, ArrowUpRight } from 'lucide-react';

export const HeaderIsland: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Determine current theme
    const isDark = document.documentElement.classList.contains('dark') ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(isDark ? 'dark' : 'light');

    // Scroll listener for sticky styling & active section
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Expertise', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-pill shadow-lg shadow-black/10 py-2.5 px-5'
            : 'bg-background/60 backdrop-blur-md border border-border/40 py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Faisal Hussain Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-foreground flex items-center gap-1.5">
                Faisal Hussain
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for Architecture & Consulting" />
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Solutions Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary border border-border/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground bg-secondary/50 border border-border/50 transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-pill rounded-2xl p-4 shadow-xl border border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-muted-foreground">#0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-border/50">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-foreground text-background shadow-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
export default HeaderIsland;
