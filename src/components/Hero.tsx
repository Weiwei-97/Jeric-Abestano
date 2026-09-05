import React from 'react';
import { MapPin, Mail, Phone, Award, GraduationCap, ChevronDown, Gamepad2, FileText, ArrowUpRight, Hotel, Coffee, Sparkles, ShieldCheck } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background ambient subtle amber lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-neutral-900/90 border border-amber-900/40 text-[11px] uppercase tracking-widest text-amber-500/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Available for Hospitality & Guest Services</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-none">
                JERIC <span className="text-amber-500 font-normal">ABESTANO</span>
              </h1>
              <p className="text-amber-500/80 uppercase tracking-[0.3em] text-xs font-semibold pt-1">
                Hospitality Management & Digital Creator
              </p>
            </div>

            {/* Career Objective */}
            <div className="p-5 rounded-sm bg-neutral-900/40 border border-amber-900/20 border-l-2 border-l-amber-500 shadow-sm max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-amber-500/70 mb-1.5 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-amber-500/40"></span>
                Career Objective
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans italic">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-neutral-900/60 border border-amber-900/30">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                Dumaguete City, Negros Oriental
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-neutral-900/60 border border-amber-900/30 hover:border-amber-500/60 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                {personalInfo.phone}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-neutral-900/60 border border-amber-900/30 hover:border-amber-500/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                {personalInfo.email}
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#mind-meld"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold text-black bg-amber-500 hover:bg-amber-400 shadow-md shadow-amber-500/20 transition-all group cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4" />
                Explore Mind Meld Game
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-amber-900/40 hover:border-amber-500/60 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                View Full Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent hover:border-neutral-800 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-amber-900/20">
              <div className="p-3 rounded-sm bg-neutral-900/40 border border-amber-900/20">
                <div className="text-xl font-light font-serif text-amber-500">4th Year</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans mt-0.5">BSHM Student</div>
              </div>
              <div className="p-3 rounded-sm bg-neutral-900/40 border border-amber-900/20">
                <div className="text-xl font-light font-serif text-amber-500">5x NC II</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans mt-0.5">TESDA Certified</div>
              </div>
              <div className="p-3 rounded-sm bg-neutral-900/40 border border-amber-900/20">
                <div className="text-xl font-light font-serif text-amber-500">3 Internships</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans mt-0.5">Food Service SIL</div>
              </div>
              <div className="p-3 rounded-sm bg-neutral-900/40 border border-amber-900/20">
                <div className="text-xl font-light font-serif text-amber-500">1 Web Game</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-sans mt-0.5">Mind Meld 2.0</div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Executive Card with Amber Accents (No face image) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Executive Identity Card */}
              <div className="relative rounded-sm overflow-hidden bg-neutral-900/90 border border-amber-900/40 shadow-2xl p-6 sm:p-7 backdrop-blur-md">
                
                {/* Background ambient pattern */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

                {/* Top Card Header: Crest & Monogram */}
                <div className="flex items-center justify-between pb-5 border-b border-amber-900/30">
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 rounded-sm bg-gradient-to-br from-amber-500/20 via-neutral-950 to-neutral-950 border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-inner">
                      <span className="font-serif text-2xl font-medium tracking-wider text-amber-500">JA</span>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-amber-500/80">
                        Hospitality Profile
                      </div>
                      <h3 className="font-serif text-xl font-light text-white leading-tight">
                        Jeric Abestano
                      </h3>
                      <p className="text-xs text-neutral-400 font-sans">
                        Asian College • Class of 2026
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500/90">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Core Credentials & Focus Areas */}
                <div className="py-5 space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">
                      Academic Degree
                    </div>
                    <div className="text-neutral-200 font-medium text-sm flex items-center gap-2">
                      <Hotel className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Bachelor of Science in Hospitality Management</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">
                      TESDA National Certifications (NC II)
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300">
                      <span className="p-2 rounded-sm bg-neutral-950/60 border border-amber-900/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Food & Beverage
                      </span>
                      <span className="p-2 rounded-sm bg-neutral-950/60 border border-amber-900/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Cookery
                      </span>
                      <span className="p-2 rounded-sm bg-neutral-950/60 border border-amber-900/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Housekeeping
                      </span>
                      <span className="p-2 rounded-sm bg-neutral-950/60 border border-amber-900/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Front Office
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">
                      Industry Internships (SIL)
                    </div>
                    <div className="p-2.5 rounded-sm bg-neutral-950/70 border border-amber-900/30 text-[11px] text-neutral-300 flex items-center gap-2">
                      <Coffee className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Tootie's Kitchen • Overdose Coffee • Gabby's Bistro</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="pt-4 border-t border-amber-900/30 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    5 TESDA NC II Holder
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400">Dumaguete City, PH</span>
                </div>

                {/* Bottom solid amber accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
              </div>

              {/* Floating Pill: Creator Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-5 p-2.5 sm:p-3 rounded-sm bg-neutral-950 border border-amber-900/40 shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-sm bg-amber-500 flex items-center justify-center text-black font-bold">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Creator of</div>
                  <div className="text-xs text-amber-500 font-semibold">Mind Meld 2.0 Game</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-[10px] uppercase tracking-widest text-neutral-500 hover:text-amber-500 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>Explore Overview</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-1 text-amber-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
