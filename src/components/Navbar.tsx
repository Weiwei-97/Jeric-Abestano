import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Gamepad2, Send, Dices } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { randomizeTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'education-certifications', 'skills', 'mind-meld', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education & Certifications', href: '#education-certifications', id: 'education-certifications' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Mind Meld', href: '#mind-meld', id: 'mind-meld', special: true },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="flex items-center gap-3 group"
          id="brand-logo-link"
        >
          <div className="w-9 h-9 rounded-sm bg-stone-900 border border-amber-600 flex items-center justify-center text-amber-400 font-serif font-bold text-sm tracking-wider shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors relative overflow-hidden">
            <span>JA</span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
              JERIC <span className="text-amber-700 font-normal">ABESTANO</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-800 font-semibold">
              Hospitality & Creator
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-[11px] uppercase tracking-wider font-semibold" id="desktop-nav">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            const stepNumber = `0${idx + 1}`;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-all py-1 border-b-2 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-amber-700 border-amber-600 font-bold'
                    : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                <span className="text-amber-700/60 text-[10px] font-mono">{stepNumber} /</span>
                {link.special && <Gamepad2 className="inline-block w-3.5 h-3.5 text-amber-700" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Random Theme Button in Navbar */}
          <button
            type="button"
            onClick={randomizeTheme}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 hover:border-amber-500 transition-all cursor-pointer shadow-2xs"
            title={`Current: ${theme.name}. Click to randomize background theme!`}
          >
            <Dices className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden xl:inline">Random Theme</span>
            <span className="xl:hidden">Theme</span>
          </button>

          <button
            type="button"
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 transition-all cursor-pointer shadow-2xs"
            title="View printable resume"
          >
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            Resume
          </button>

          <a
            href="#contact"
            id="nav-contact-cta"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-sm transition-all cursor-pointer"
          >
            <Send className="w-3 h-3" />
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-sm text-stone-800 hover:bg-stone-100 border border-stone-300 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-700" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-white border-b border-stone-200 px-5 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200 text-stone-800"
        >
          <div className="flex flex-col space-y-1 pt-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 rounded-sm text-xs uppercase tracking-wider font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-amber-50 text-amber-800 border border-amber-300 font-bold'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-amber-700/60 font-mono text-[10px]">0{idx + 1} /</span>
                  {link.special && <Gamepad2 className="w-3.5 h-3.5 text-amber-700" />}
                  {link.name}
                </span>
                {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                randomizeTheme();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300"
            >
              <Dices className="w-3.5 h-3.5 text-amber-700" />
              Randomize Theme ({theme.name})
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-medium text-stone-800 bg-white border border-stone-300"
            >
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              View Printable Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-bold text-white bg-amber-700 hover:bg-amber-800"
            >
              <Send className="w-3.5 h-3.5" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

