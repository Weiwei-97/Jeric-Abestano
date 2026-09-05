import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Gamepad2, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
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
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-amber-900/40 shadow-xl shadow-black/60 py-3.5'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent py-5 border-b border-amber-900/20'
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
          className="flex items-center gap-3.5 group"
          id="brand-logo-link"
        >
          <div className="w-9 h-9 rounded-sm bg-neutral-900 border border-amber-900/50 flex items-center justify-center text-amber-500 font-serif font-bold text-sm tracking-wider shadow-inner group-hover:border-amber-500 transition-colors relative overflow-hidden">
            <span>JA</span>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-light tracking-tight text-white group-hover:text-amber-500 transition-colors">
              JERIC <span className="text-amber-500 font-normal">ABESTANO</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-500/80 font-semibold">
              Hospitality & Creator
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold" id="desktop-nav">
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
                    ? 'text-amber-500 border-amber-500'
                    : 'text-neutral-400 border-transparent hover:text-amber-400'
                }`}
              >
                <span className="text-amber-500/60 text-[10px] font-mono">{stepNumber} /</span>
                {link.special && <Gamepad2 className="inline-block w-3.5 h-3.5 text-amber-500" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-semibold text-neutral-300 bg-neutral-900/90 hover:bg-neutral-800 border border-amber-900/40 hover:border-amber-500/60 transition-all cursor-pointer"
            title="View printable resume"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            Resume
          </button>

          <a
            href="#contact"
            id="nav-contact-cta"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-[11px] uppercase tracking-wider font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-sm shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Send className="w-3 h-3" />
            Get In Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-sm text-neutral-300 hover:text-white hover:bg-neutral-900 border border-amber-900/30 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#0a0a0a] border-b border-amber-900/40 px-5 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 pt-1">
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
                    ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-amber-500/60 font-mono text-[10px]">0{idx + 1} /</span>
                  {link.special && <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />}
                  {link.name}
                </span>
                {activeSection === link.id && <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-amber-900/30 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-medium text-neutral-300 bg-neutral-900 border border-amber-900/40"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              View Printable Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-bold text-black bg-amber-500 hover:bg-amber-400"
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
