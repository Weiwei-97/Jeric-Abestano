import React from 'react';
import { ArrowUp, Heart, Gamepad2, Award, Mail, Phone } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  personalInfo,
  onOpenResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100/90 backdrop-blur-xs border-t border-stone-200 text-stone-600 py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-stone-200">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md border border-amber-300 bg-white flex items-center justify-center text-amber-800 font-serif font-bold text-sm tracking-wider shadow-2xs">
                JA
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-stone-900 block">
                  {personalInfo.fullName}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-amber-800 font-mono font-bold">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 max-w-sm leading-relaxed font-sans">
              Hospitality Management student at Asian College Dumaguete City, with 5 TESDA NC II certifications and creator of Mind Meld 2.0.
            </p>

            <div className="pt-2 text-xs text-stone-500 font-mono">
              Dumaguete City, Negros Oriental, Philippines
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-amber-800 transition-colors">
                  About Jeric
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-800 transition-colors">
                  Food Service Internships
                </a>
              </li>
              <li>
                <a href="#education-certifications" className="hover:text-amber-800 transition-colors">
                  Education & TESDA NC II
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-800 transition-colors">
                  Core Competencies
                </a>
              </li>
              <li>
                <a href="#mind-meld" className="text-amber-800 hover:text-amber-950 transition-colors font-bold flex items-center gap-1.5">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  Mind Meld 2.0 Game
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-800 transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-800 font-sans">
              Credentials & Links
            </h4>
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 hover:border-amber-400 text-xs text-stone-800 transition-colors flex items-center justify-between cursor-pointer shadow-2xs font-medium"
              >
                <span>Printable Official Resume (CV)</span>
                <span className="text-amber-800 text-[11px] font-mono font-bold">View →</span>
              </button>

              <a
                href="https://weiwei-97.github.io/MIND-MELD-2.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left p-3 rounded-lg bg-white border border-stone-200 hover:border-amber-400 text-xs text-stone-800 transition-colors shadow-2xs font-medium"
              >
                <div className="flex items-center justify-between">
                  <span className="text-stone-900 font-bold">Mind Meld Web Game</span>
                  <span className="text-amber-800 text-[11px] font-mono font-bold">Play ↗</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 font-mono">weiwei-97.github.io/MIND-MELD-2.0/</div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-600 hover:text-amber-800 transition-colors cursor-pointer font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
